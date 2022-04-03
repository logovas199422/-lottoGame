import React, {useState} from "react";
import {ReactComponent as MagicWand} from "../assets/magic-wand.svg";
import FirstField from "./FirstField";
import SecondField from "./SecondField";

export default function Ticket() {

    let firstFieldItemCount = [];
    let secondFieldItemCount = [1, 2];
    for (let i = 1; i <= 19; i++) {
        firstFieldItemCount.push(i)
    }

    const firstFieldWinningNumbers = randomNumbers(19, 8)
    const secondFieldWinningNumbers = randomNumbers(2, 1)

    const [firstFieldSelectedNumbers, setFirstFieldSelectedNumbers] = useState([]);
    const [secondFieldSelectedNumbers, setSecondFieldSelectedNumbers] = useState([]);

    let firstFieldMatchedNumbers = []
    let secondFieldMatchedNumbers = []

    let isTicketWon = false

    const requestURL = "https://jsonplaceholder.typicode.com/users"

    function sendRequest(method, url, body = null) {
        const headers = {
            'Content-Type': 'application/JSON'
        }
        return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then(error => {
                const e = new Error('Что-то пошло не так')
                e.data = error
                throw e
            })
        })
    }

    function randomNumbers(range, count) {
        let m = {};
        let result = [];
        for (let i = 0; i < count; ++i) {
            let r = Math.floor(Math.random() * (range - i));
            result.push(((r in m) ? m[r] : r) + 1);
            let l = range - i - 1;
            m[r] = (l in m) ? m[l] : l;
        }
        return result
    }

    function removeDuplicates(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    function matchedNumbers(fieldWinningNumbers, selectedNumbers) {
        return fieldWinningNumbers.filter(x => selectedNumbers.includes(x));
    }

    const onSelectFirstFieldItem = (evt) => {
        if (firstFieldSelectedNumbers.length <= 7) {
            setFirstFieldSelectedNumbers(removeDuplicates([...firstFieldSelectedNumbers, parseInt(evt.target.innerHTML)]))
        }
    }

    const onSelectSecondFieldItem = (evt) => {
        if (secondFieldSelectedNumbers.length <= 0) {
            setSecondFieldSelectedNumbers(removeDuplicates([...secondFieldSelectedNumbers, parseInt(evt.target.innerHTML)]))
        }
    }

    const magicWand = () => {
        setFirstFieldSelectedNumbers(randomNumbers(19, 8))
        setSecondFieldSelectedNumbers(randomNumbers(2, 1))
    }

    const showResult = () => {
        if (firstFieldSelectedNumbers.length == 8 && secondFieldSelectedNumbers.length == 1) {
            firstFieldMatchedNumbers = matchedNumbers(firstFieldWinningNumbers, firstFieldSelectedNumbers)
            secondFieldMatchedNumbers = matchedNumbers(secondFieldWinningNumbers, secondFieldSelectedNumbers)
            if (firstFieldMatchedNumbers.length >= 4 || (firstFieldMatchedNumbers.length >= 3 && secondFieldMatchedNumbers.length > 0)) {
                isTicketWon = true
                alert("Ты победил и получаешь причитающиеся тебе лавры (ничего не получаешь)" +
                    " \nВыигрышные числа первого поля " + firstFieldWinningNumbers + " \nВыигрышные числа второго поля "
                    + secondFieldWinningNumbers + "\nСовпавшие числа первого поля " + firstFieldMatchedNumbers + "\nСовпавшие числа второго поля " + secondFieldMatchedNumbers);
            } else {
                alert("Ты проиграл. \nВыигрышные числа первого поля " + firstFieldWinningNumbers + " \nВыигрышные числа второго поля "
                    + secondFieldWinningNumbers + "\nСовпавшие числа первого поля " + firstFieldMatchedNumbers + "\nСовпавшие числа второго поля " + secondFieldMatchedNumbers);
            }

            let body = {
                selectedNumber: {firstField: firstFieldSelectedNumbers, secondField: secondFieldSelectedNumbers},
                isTicketWon: isTicketWon
            };

            sendRequest("POST", requestURL, body)
                .then(data => console.log(data))
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="ticket">
            <div className="ticket__container">
                <span className="ticket__header">
                Билет 1
                </span>
                <MagicWand onClick={magicWand}/>
            </div>
            <FirstField fieldHeader="Поле 1" fieldInfo="Отметьте 8 чисел."
                        firstFieldItemCount={firstFieldItemCount} onSelectFirstFieldItem={onSelectFirstFieldItem}
                        firstFieldSelectedNumbers={firstFieldSelectedNumbers}/>
            <SecondField fieldHeader="Поле 2" fieldInfo="Отметьте 1 число."
                         secondFieldItemCount={secondFieldItemCount} onSelectSecondFieldItem={onSelectSecondFieldItem}
                         secondFieldSelectedNumbers={secondFieldSelectedNumbers}/>
            <button className="ticket__button" onClick={showResult}>
                Показать Результат
            </button>
        </div>
    )
}

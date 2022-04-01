import React, {useState} from "react";
import {ReactComponent as MagicWand} from "../assets/magic-wand.svg";
import Field from "./Field";
import Field2 from "./Field2";

export default function Ticket() {

    let field1ItemCount = [];
    let field2ItemCount = [1, 2];
    for (let i = 1; i <= 19; i++) {
        field1ItemCount.push(i)
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

    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    let field2Result = randomNumbers(2, 1)
    let field1Result = randomNumbers(19, 8)


    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [selectedNumbers2, setSelectedNumbers2] = useState([]);

    function matchedNumbers(fieldResult, selectedNumbers) {
        let matchedNumbers = []
        for (let i = 0; i < selectedNumbers.length; ++i) {
            for (let j = 0; j < fieldResult.length; ++j) {
                if (fieldResult[i] == selectedNumbers[j])
                    matchedNumbers.push(fieldResult[i]);
            }
        }
        console.log(fieldResult)
        console.log(selectedNumbers)
        return matchedNumbers
    }


    const onSelectFieldItem = (evt) => {
        if (selectedNumbers.length <= 7) {
            setSelectedNumbers(unique([...selectedNumbers, evt.target.innerHTML]))
        }
    }

    const onSelectField2Item = (evt) => {
        if (selectedNumbers2.length <= 0) {
            setSelectedNumbers2(unique([...selectedNumbers2, evt.target.innerHTML]))
        }
    }
    let field1MatchedNumbers
    let field2MatchedNumbers
    const showResult = () => {
        if (selectedNumbers.length == 8) {
            field1MatchedNumbers = matchedNumbers(field1Result, selectedNumbers)
        }
        if (selectedNumbers2.length == 1) {
            field2MatchedNumbers = matchedNumbers(field2Result, selectedNumbers2)
        }

        console.log(field1MatchedNumbers)
        console.log(field2MatchedNumbers)

        if(field1MatchedNumbers.length >=3 &&field2MatchedNumbers.length > 0){
            alert("Ты победил и получаешь причитающиеся тебе лавры (ничего не получаешь)");
        }else {
            alert("Ты проиграл.");
        }

    }


    return (
        <div className="ticket">
            <div className="ticket__container">
                <span className="ticket__header">
                Билет 1
                </span>
                <MagicWand/>
            </div>
            <Field fieldHeader="Поле 1" fieldInfo="Отметьте 8 чисел."
                   fieldItem={field1ItemCount} onSelectedFieldItem={onSelectFieldItem}
                   selectedNumbers={selectedNumbers}/>
            <Field2 fieldHeader="Поле 2" fieldInfo="Отметьте 1 чисело."
                    fieldItem={field2ItemCount} onSelectedField2Item={onSelectField2Item}
                    selectedNumbers2={selectedNumbers2}/>
            <button className="ticket__button" onClick={showResult}>
                Показать Результат
            </button>
        </div>
    )
}

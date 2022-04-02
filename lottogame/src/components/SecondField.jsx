import React from "react";
import SecondFieldItem from "./SecondFieldItem";

export default function SecondField({fieldHeader, fieldInfo, secondFieldItemCount, onSelectSecondFieldItem, secondFieldSelectedNumbers}) {

    return (
        <div className="field">
            <div className="field__container">
                <span className="field__header">
                {fieldHeader}
                </span>
                <span className="field__info">
                {fieldInfo}
                </span>
            </div>
            <div className="field__item-container">
                {secondFieldItemCount.map((count, idx) => <SecondFieldItem key={idx} count={count}
                                                                           onSelectSecondFieldItem={onSelectSecondFieldItem}
                                                                           isActive={secondFieldSelectedNumbers.includes(count)}/>)}
            </div>
        </div>
    )
}
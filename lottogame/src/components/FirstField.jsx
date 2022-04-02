import React from "react";
import FirstFieldItem from "./FirstFieldItem";

export default function FirstField({fieldHeader,fieldInfo,firstFieldItemCount,onSelectFirstFieldItem,firstFieldSelectedNumbers}) {

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
            <div  className="field__item-container">
                {firstFieldItemCount.map((count, idx) => <FirstFieldItem key={idx} count={count}
                                                                         onSelectFirstFieldItem={onSelectFirstFieldItem}
                                                                         isActive={firstFieldSelectedNumbers.includes(count)}/>)}
            </div>
        </div>
    )
}

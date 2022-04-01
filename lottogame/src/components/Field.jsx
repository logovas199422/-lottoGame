import React from "react";
import FieldItem from "./FieldItem";

export default function Field({fieldHeader,fieldInfo,fieldItem,onSelectedFieldItem,selectedNumbers}) {

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
                {fieldItem.map((count, idx) => <FieldItem key={idx} count={count}
                                                          onSelectedFieldItem={onSelectedFieldItem}
                                                          selectedNumbers={selectedNumbers}/>)}
            </div>
        </div>
    )
}

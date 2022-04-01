import React from "react";
import FieldItem2 from "./FieldItem2";

export default function Field2({fieldHeader,fieldInfo,fieldItem,onSelectedField2Item,selectedNumbers2}) {

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
                {fieldItem.map((count, idx) => <FieldItem2 key={idx} count={count}
                                                          onSelectedField2Item={onSelectedField2Item}
                                                          selectedNumbers2={selectedNumbers2}/>)}
            </div>
        </div>
    )
}
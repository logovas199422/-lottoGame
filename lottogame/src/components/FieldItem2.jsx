import React from "react";
import classNames from "classnames";

export default function FieldItem2({count, onSelectedField2Item, selectedNumbers2}) {
    const fieldItemClasses = classNames('field__item', {
        'field__item--active': count == selectedNumbers2[0] || count == selectedNumbers2[1]
    })

    return (
        <div className={fieldItemClasses} onClick={onSelectedField2Item}>
            {count}
        </div>
    )
}

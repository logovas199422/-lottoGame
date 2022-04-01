import React from "react";
import classNames from "classnames";

export default function FieldItem({count, onSelectedFieldItem, selectedNumbers}) {
    const fieldItemClasses = classNames('field__item', {
        'field__item--active': count == selectedNumbers[0] || count == selectedNumbers[1]
            || count == selectedNumbers[2] || count == selectedNumbers[3] || count == selectedNumbers[4]
            || count == selectedNumbers[5] || count == selectedNumbers[6] || count == selectedNumbers[7]
    })

    return (
        <div className={fieldItemClasses} onClick={onSelectedFieldItem}>
            {count}
        </div>
    )
}

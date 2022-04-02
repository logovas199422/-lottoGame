import React from "react";
import classNames from "classnames";

export default function SecondFieldItem({count, onSelectSecondFieldItem, isActive}) {

    const fieldItemClasses = classNames('field__item', {'field__item--active': isActive})

    return (
        <div className={fieldItemClasses} onClick={onSelectSecondFieldItem}>
            {count}
        </div>
    )
}

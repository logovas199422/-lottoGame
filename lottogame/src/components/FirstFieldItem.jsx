import React from "react";
import classNames from "classnames";

export default function FirstFieldItem({count, onSelectFirstFieldItem, isActive}) {

    const fieldItemClasses = classNames('field__item', {'field__item--active': isActive})

    return (
        <div className={fieldItemClasses} onClick={onSelectFirstFieldItem}>
            {count}
        </div>
    )
}

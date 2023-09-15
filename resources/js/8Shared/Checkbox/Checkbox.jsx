import { useState } from "react";
import s from "./Checkbox.module.css"
import cn from "classnames"


const Checkbox = ({ label, isChecked, checkHandler, value, className, ...props }) => {

    return (
        <div className={s.checkboxField}>
            <label className={s.checkboxWrapper}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    value={value}
                    checked={isChecked}
                    onChange={checkHandler}
                    {...props}
                />
                <span>{label}</span>
            </label>

        </div>
    )
}

export default Checkbox;
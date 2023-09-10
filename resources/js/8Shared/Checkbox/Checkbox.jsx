import { useState } from "react";
import s from "./Checkbox.module.css"
import cn from "classnames"


const Checkbox = ({ label, checked, className, ...props }) => {
    const defaultState = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultState);

    return (
        <div className={s.checkboxField}>
            <label className={s.checkboxWrapper}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className={cn(className, {
                        [s.checked]: isChecked
                    })}
                    {...props}
                />
                <span>{label}</span>
            </label>

        </div>
    )
}

export default Checkbox;
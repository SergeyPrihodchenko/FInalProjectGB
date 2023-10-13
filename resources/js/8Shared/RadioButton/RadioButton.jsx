import s from "./RadioButton.module.css"
import cn from "classnames"


const RadioButton = ({
    className,
    label,
    name,
    value,
    ...props
}) => {
    return (
        <div className={s.radioField}>
            <label className={s.radioWrapper}>
                <input
                    type="radio"
                    name={name}
                    id=""
                    value={value}

                    className={cn(className, {
                        // [s.checked]: isChecked
                    })}
                    {...props}
                />
                <span>{label}</span>
            </label>

        </div>
    )
}


export default RadioButton;
import cn from "classnames";
import s from "./GuestLayout.module.css";

export default function Guest({ children, className }) {
    return (
        <>
            <div className={cn(s.layout, className)}>
                <div className={cn(s.form)}>{children}</div>
            </div>
        </>
    );
}

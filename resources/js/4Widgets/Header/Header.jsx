import s from "./Header.module.css";
import cn from "classnames";
export const Header = ({ children, className }) => {
    return <header className={cn(s.header, className)}>{children}</header>;
};

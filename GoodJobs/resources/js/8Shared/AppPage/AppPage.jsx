import s from "./AppPage.module.css";
import PropTypes from "prop-types";
import cn from "classnames";
export const AppPage = ({ children, className }) => {
    return <section className={cn(s.appPage, className)}>{children}</section>;
};

AppPage.propTypes = {
    children: PropTypes.any,
};

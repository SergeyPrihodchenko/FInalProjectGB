import React from "react";
import s from "./AppLink.module.css";
import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "@inertiajs/react";

function AppLink(props) {
    const {
        path = "main",
        param,
        className,
        children,
        sizeText = "m",
        bold,
    } = props;
    return (
        <Link
            href={route(path, param)}
            className={cn(
                s.appLink,
                s[sizeText],
                { [s.bold]: bold },
                className
            )}
        >
            {children}
        </Link>
    );
}

AppLink.propTypes = {
    sizeText: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
};

export default AppLink;

import React from "react";
import s from "./AppCard.module.css";
import cn from "classnames";
import PropTypes from "prop-types";

function AppCard({
    children,
    className,
    variant = "clear",
    shadow,
    width,
    height,
    borderLeft,
    borderRadius,
    borderRadiusSmall,
}) {
    return (
        <div
            className={cn(s.appCard, className, s[variant], {
                [s.shadow]: shadow,
                [s.borderLeft]: borderLeft,
                [s.borderRadius]: borderRadius,
                [s.borderRadiusSmall]: borderRadiusSmall,
            })}
            style={{ width: width, height: height }}
        >
            {children}
        </div>
    );
}

AppCard.propTypes = {
    variant: PropTypes.oneOf(["clear", "primary", "secondary"]),
    width: PropTypes.string,

};

export default AppCard;

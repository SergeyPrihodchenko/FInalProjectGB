import { CSSProperties, memo } from "react";
import cn from "classnames";
import s from "./AppSkeleton.module.css";

export const AppSkeleton = (props) => {
    const { className, height, width, border } = props;
    const styles = {
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${border}`,
    };
    return (
        <div>
            <div className={s.skeleton} style={styles}></div>
        </div>
    );
};

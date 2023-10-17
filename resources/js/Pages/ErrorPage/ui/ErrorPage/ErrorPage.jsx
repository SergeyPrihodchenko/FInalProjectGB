import React from "react";
import PropTypes from "prop-types";
import s from "./ErrorPage.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";
function ErrorPage(props) {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={s.errorPage}>
            <AppText
                text={"Произошла непредвиденная ошибка"}
                variant={"error"}
            />
            <div className={s.btns}>
                <AppButton
                    onClick={() => {
                        location.replace("/");
                    }}
                    className={s.btn}
                >
                    {"На главную"}
                </AppButton>
                <AppButton onClick={reloadPage} className={s.btn}>
                    {"Обновить страницу"}
                </AppButton>
            </div>
        </div>
    );
}

ErrorPage.propTypes = {};

export default ErrorPage;

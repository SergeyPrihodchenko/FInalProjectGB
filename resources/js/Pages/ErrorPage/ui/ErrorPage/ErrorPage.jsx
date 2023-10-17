import React from "react";
import PropTypes from "prop-types";

function ErrorPage(props) {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={s.pageError}>
            <div>{"Произошла непредвиденная ошибка"}</div>
            <AppButton onClick={reloadPage} className={s.btn}>
                {"Обновите страницу"}
            </AppButton>
        </div>
    );
}

ErrorPage.propTypes = {};

export default ErrorPage;

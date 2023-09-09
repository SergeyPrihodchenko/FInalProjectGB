import React from "react";
//import PropTypes from 'prop-types'
import s from "../ProfilePageForm/ProfilePageForm.module.css";
import { AppPage } from "@/8Shared/AppPage/AppPage";
import MainLayout from "@/4Layouts/MainLayout/MainLayout";
import AppText from "@/8Shared/ui/AppText/AppText";

const arrayForm = [
    {
        lable: "Имя",
        placeholder: "Иванов Иван",
        type: "text",
    },
    {
        lable: "Пароль",
        placeholder: "Обновлен 2 года назад",
        type: "password",
    },
    {
        lable: "Email",
        placeholder: "IvanovIvan@pirozok.com",
        type: "email",
    },
    {
        lable: "Мобильный телефон",
        placeholder: "+7 (999) 777-88-99",
        type: "tel",
    },
    {
        lable: "Район поиска работы",
        placeholder: "Москва",
        type: "address",
    },
    {
        lable: "Соц сети",
        placeholder: "Не привязаны",
        type: "image",
    },
];

const ProfilePageForm = arrayForm.map((el) => {
    console.log(el);
    return (
        <form action="#" className={s.formProfilePage}>
            <AppText
                size="s"
                text={
                    <div className={s.formProfile}>
                        <lable for="name" className={s.textForm}>
                            {el.lable}
                        </lable>
                        <input
                            className={s.inputFormProfile}
                            type="text"
                            placeholder={el.placeholder}
                        />
                        <input
                            className={s.btnFormProfile}
                            type="submit"
                            value="Изменить"
                        />
                    </div>
                }
            />
        </form>
    );
});

arrayForm.forEach((el) => {
    console.log(el);
    return (
        <form action="#" className={s.formProfilePage}>
            <div className={s.formProfile}>
                <lable for="name" className={s.textForm}>
                    Имя
                </lable>
                <input
                    className={s.inputFormProfile}
                    type="text"
                    placeholder={el.userName}
                />
                <input
                    className={s.btnFormProfile}
                    type="submit"
                    value="Изменить"
                />
            </div>
        </form>
    );
});
//ProfilePage.propTypes = {}

export default ProfilePageForm;

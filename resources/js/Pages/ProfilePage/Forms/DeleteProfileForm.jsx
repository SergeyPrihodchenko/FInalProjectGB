import React, { useRef } from "react";
import s from "../ProfilePage.module.css";
import style from "../ProfilePageForm/ProfilePageForm.module.css";
import { useForm } from "@inertiajs/react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";

function DeleteProfileForm() {
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        password: "",

    });

    const destroyProfile = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"));
    };

    return (
        <form onSubmit={destroyProfile} className={s.formProfileDelete}>
            <input
                id="password"
                ref={passwordInput}
                value={data.password}
                className={s.inputFormProfileDelete}
                type="password"
                placeholder="Введите пароль"
                onChange={(e) => setData("password", e.target.value)}
            />
            <div className={style.divLeft}>
                <AppText size={'m'} title={
                    <AppButton variant='clear' size='m' type="submit">
                        <span className={s.textBtnDelete}>Удаление аккаунта</span>
                    </AppButton> 
                }/>
            </div>        
        </form>      
    );
}

export default DeleteProfileForm;

import React, { useRef } from "react";
import s from "../ProfilePage.module.css";
import style from "../ProfilePageForm/ProfilePageForm.module.css";
import { useForm } from "@inertiajs/react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

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
            <AppInput
                width={"400px"}
                id="password"
                ref={passwordInput}
                value={data.password}
                type="password"
                placeholder="Введите пароль, чтобы удалить аккаунт"
                onChange={(e) => setData("password", e.target.value)}
                variant="primary"
            />
            <div className={style.divLeft}>
                <AppButton
                    variant="clear"
                    colorType="cancel"
                    sizeText="m"
                    type="submit"
                >
                    Удаление аккаунта
                </AppButton>
            </div>
        </form>
    );
}

export default DeleteProfileForm;

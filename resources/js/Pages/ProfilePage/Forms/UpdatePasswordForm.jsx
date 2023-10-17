import React, { useRef } from "react";
import s from "../ProfilePageForm/ProfilePageForm.module.css";
import { useForm } from "@inertiajs/react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

function UpdatePasswordForm() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <div className={s.formProfilePage}>
            <form onSubmit={updatePassword} className={s.formProfilePasswor}>
                <div className={s.inputsWrapper}>
                    <div className={s.userInput}>
                        <lable className={s.textForm}>Текущий пароль</lable>
                        <AppInput
                            width={"400px"}
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            className={s.inputFormProfile}
                            type="password"
                            placeholder="текущий пароль"
                            onChange={(e) =>
                                setData("current_password", e.target.value)
                            }
                            errorMessage={errors.current_password}
                        />
                    </div>

                    <div className={s.userInput}>
                        <lable className={s.textForm}>Новый пароль</lable>
                        <AppInput
                            width={"400px"}
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            className={s.inputFormProfile}
                            type="password"
                            placeholder="новый пароль"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            errorMessage={errors.password}
                        />
                    </div>

                    <div className={s.userInput}>
                        <lable className={s.textForm}>Подтвердить пароль</lable>
                        <AppInput
                            width={"400px"}
                            id="password_confirmation"
                            value={data.password_confirmation}
                            className={s.inputFormProfile}
                            type="password"
                            placeholder="подтверждение пароля"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            errorMessage={errors.password_confirmation}
                        />
                    </div>
                </div>
                <div className={s.divLeft}>
                    <AppButton type="submit" variant="clear">
                        Изменить
                    </AppButton>
                </div>
            </form>
        </div>
    );
}

export default UpdatePasswordForm;

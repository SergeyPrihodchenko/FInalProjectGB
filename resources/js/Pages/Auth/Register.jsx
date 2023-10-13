import { useEffect } from "react";
import GuestLayout from "@/5Layouts/GuestLayout/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import cn from "classnames";
import s from "./RegisterPage.module.css";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import RadioButton from "@/8Shared/RadioButton/RadioButton";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        isRol: ''
    });
    // console.log(data);
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Регистрация" />

            <form onSubmit={submit}>
                <div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <RadioButton
                            name={"isRol"}
                            value={0}
                            id={'applicant'}
                            label={"Соискатель"}
                            onChange={(e) => setData("isRol", e.target.value)}
                        />
                        <RadioButton
                            name={"isRol"}
                            id={'employer'}
                            value={1}
                            label={"Работодатель"}
                            onChange={(e) => setData('isRol', e.target.value)}
                        />

                    </div>
                    <AppInput
                        id="name"
                        name="name"
                        width="100%"
                        label="Имя"
                        value={data.name}
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        errorMessage={errors.name}
                    />

                    {/* <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    /> */}

                    {/* <InputError message={errors.name} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <AppInput
                        id="email"
                        type="email"
                        name="email"
                        width="100%"
                        label="Почта"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        errorMessage={errors.email}
                    />
                    {/* <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    /> */}

                    {/* <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <AppInput
                        id="password"
                        type="password"
                        name="password"
                        width="100%"
                        label="Пароль"
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                        errorMessage={errors.password}
                    />
                    {/* <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    /> */}

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <AppInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        width="100%"
                        label="Подтвердить пароль"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                        errorMessage={errors.password_confirmation}
                    />
                    {/* <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    /> */}

                    {/* <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    /> */}
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Уже зарегестрирован?
                    </Link>

                    <AppButton
                        className={cn(s.btn)}
                        sizeText="s"
                        disabled={processing}
                    >
                        Зарегистрироваться
                    </AppButton>
                </div>
            </form>
        </GuestLayout>
    );
}

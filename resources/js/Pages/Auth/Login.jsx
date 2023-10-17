import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/5Layouts/GuestLayout/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import s from "./LoginPage.module.css";
import cn from "classnames";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className={cn(s.loginItem)}>
                    <AppInput
                        id="email"
                        type="email"
                        name="email"
                        width="100%"
                        label="Почта"
                        value={data.email}
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
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
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    /> */}

                    {/* <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className={cn(s.loginItem)}>
                    <AppInput
                        id="password"
                        type="password"
                        name="password"
                        width="100%"
                        label="Пароль"
                        value={data.password}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        errorMessage={errors.password}
                    />
                    {/* <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    /> */}

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Запомнить меня
                        </span>
                    </label>
                </div> */}

                <div
                    className={cn(
                        "flex items-center justify-end mt-4",
                        s.loginWrapper,
                        s.loginItem
                    )}
                >
                    {/* {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Восстановить пароль?
                        </Link>
                    )} */}

                    <AppButton
                        className={cn(s.btn)}
                        sizeText="s"
                        // disabled={processing}
                        width="80px"
                        height="34px"
                    >
                        Войти
                    </AppButton>
                </div>
            </form>
        </GuestLayout>
    );
}

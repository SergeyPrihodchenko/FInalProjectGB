import GuestLayout from "@/5Layouts/GuestLayout/GuestLayout";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <AppInput
                    id="email"
                    type="email"
                    name="email"
                    width="100%"
                    value={data.email}
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />
                {/* <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                /> */}

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <AppButton sizeText="s" disabled={processing}>Сборсить пароль</AppButton>
                    {/* <PrimaryButton className="ml-4">
                        Email Password Reset Link
                    </PrimaryButton> */}
                </div>
            </form>
        </GuestLayout>
    );
}

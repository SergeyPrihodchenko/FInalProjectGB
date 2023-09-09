import MainPage from "./MainPage/MainPage";
import "../1App/styles/index.css";
import cn from "classnames";
import MainLayout from "@/4Layouts/MainLayout/MainLayout";

export default function Main({ auth, categories, vacancies, className }) {
    const user = auth?.user;
    return (
        <MainPage
            categories={categories}
            auth={auth}
            className={cn(className)}
            vacancies={vacancies}
        />

        /* {auth.user ? (
            <Link
            href={route('dashboard')}
            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
                        Dashboard
                    </Link>

        ) : (
            <>
                <Link
                    href={route("login")}
                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Log in
                </Link>

                <Link
                    href={route("register")}
                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Register
                </Link>
            </>
        )} */
    );
}

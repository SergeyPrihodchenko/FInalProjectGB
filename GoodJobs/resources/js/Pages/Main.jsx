import { Link } from "@inertiajs/react";
import { MainPage } from "./MainPage/MainPage";
import "../App/styles/index.css";

export default function Main({ auth, laravelVersion, phpVersion, categories, className }) {
    return (

        <>
           <Link
                        href={route("register")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Register
                </Link>
            
            <Link
                        href={route("profilePage")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        ProfilePage
                </Link>
            <MainPage categories={categories} auth={auth} className={className} />
            
            
            {/* {auth.user ? (
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
            )} */}

        </>

    );
}

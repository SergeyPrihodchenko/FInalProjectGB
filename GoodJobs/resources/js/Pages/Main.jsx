import { Link } from '@inertiajs/react';
import { MainPage } from './MainPage/MainPage';

export default function App({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            {auth.user ? (
                // <Link
                // href={route('dashboard')}
                // className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                // >
                //             Dashboard
                //         </Link>
                <MainPage />
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Register
                    </Link>
                </>
            )}

        </>
    );
}

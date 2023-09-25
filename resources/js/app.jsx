import "./bootstrap";
import "./1App/styles/index.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import MainLayout from "./5Layouts/MainLayout/MainLayout";
import { AuthContext } from "./8Shared/store/AuthContext";
import { useEffect } from "react";
import { AuthProvider } from "./1App/providers/AuthProvider/AuthProvider";

const appName = import.meta.env.VITE_APP_NAME;
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        const auth = props?.initialPage?.props?.auth?.user
            ? props?.initialPage?.props?.auth
            : null;
        const porps = props;
        // console.log("app.jsx user", auth);
        // console.log("app.jsx porps", porps);
        // console.log("app.jsx App", porps);

        root.render(
            <>
                {/* <AuthProvider auth={auth} {...props}></AuthProvider> */}
                {/* <MainLayout className={"app_light_theme"} user={auth}> */}
                <App {...props} id="root"></App>
                {/* </MainLayout> */}
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});

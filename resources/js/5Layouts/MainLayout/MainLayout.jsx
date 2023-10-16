import s from "./MainLayout.module.css";

import { PropTypes } from "prop-types";
import cn from "classnames";
import { Header } from "@/4Widgets/Header/Header";
import { Footer } from "@/4Widgets/Footer/Footer";
import { Navbar } from "@/4Widgets/Navbar/ui/Navbar";
import SecondNav from "@/4Widgets/SecondNav/ui/SecondNav";
import { useState } from "react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

const MainLayout = (porps) => {
    const LOCALSTORAGE_THEME_KEY = "theme";
    const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY);
    const [theme, setTheme] = useState(defaultTheme);
    const dispatch = useDispatch();
    // console.log("theme", theme);
    // console.log("s", s);

    const { children, user, className } = porps;
    // console.log(".jsx porps", porps);
    const locationPath = window.location.pathname;

    const switchTheme = (theme) => {
        let newTheme;
        switch (theme) {
            case "app_light_theme":
                newTheme = "app_dark_theme";
                break;
            case "app_dark_theme":
                newTheme = "app_light_theme";
                break;

            default:
                newTheme = "app_light_theme";
                break;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };
    useEffect(() => {
        if (defaultTheme) {
            console.log("defaultTheme", defaultTheme);
            setTheme(defaultTheme);
            document.body.className = defaultTheme;
        } else {
            setTheme("app_light_theme");
            document.body.className = "app_light_theme";
        }
    }, []);
    return (
        <div id={"themeBlock"} className={cn(s.mainLayout, className, theme)}>
            <header>
                <Header className={s.header}>
                    <Navbar
                        user={user}
                        switchTheme={switchTheme}
                        theme={theme}
                    />
                </Header>

                {locationPath !== "/" &&
                    locationPath !== "/register" &&
                    locationPath !== "/login" &&
                    locationPath !== "/forgot-password" &&
                    user !== null && <SecondNav user={user} />}
            </header>

            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {};

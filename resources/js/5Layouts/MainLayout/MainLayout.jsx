import s from "./MainLayout.module.css";

import { PropTypes } from "prop-types";
import cn from "classnames";
import { Header } from "@/4Widgets/Header/Header";
import { Footer } from "@/4Widgets/Footer/Footer";
import { Navbar } from "@/4Widgets/Navbar/ui/Navbar";
import SecondNav from "@/4Widgets/SecondNav/ui/SecondNav";
import { useState } from "react";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

const MainLayout = (porps) => {
    const [theme, setTheme] = useState("app_light_theme");
    // console.log("theme", theme);
    // console.log("s", s);

    const { children, user, className } = porps;
    // console.log(".jsx porps", porps);
    const locationPath = window.location.pathname;

    const switchTheme = () => {
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
    };
    return (
        <div id={'themeBlock'} className={cn(s.mainLayout, className, theme)}>
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
                    user !== null &&
                    <SecondNav user={user} />}
            </header>

            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {};

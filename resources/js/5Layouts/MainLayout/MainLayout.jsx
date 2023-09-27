import s from "./MainLayout.module.css";

import { PropTypes } from "prop-types";
import cn from "classnames";
import { Header } from "@/4Widgets/Header/Header";
import { Footer } from "@/4Widgets/Footer/Footer";
import { Navbar } from "@/4Widgets/Navbar/Navbar";
import SecondNav from "@/4Widgets/SecondNav/SecondNav";

const MainLayout = (porps) => {
    const { children, user, className } = porps;
    // console.log(".jsx porps", porps);
    const locationPath = window.location.pathname;
    return (
        <div className={cn(s.mainLayout, className)}>
            <header>
                <Header className={s.header}>
                    <Navbar user={user} />
                </Header>
                {locationPath !== "/" &&
                    locationPath !== "/register" &&
                    locationPath !== "/login" &&
                    locationPath !== "/forgot-password" && <SecondNav />}
            </header>

            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {};

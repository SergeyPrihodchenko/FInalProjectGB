import s from "./MainLayout.module.css";
import { Header } from "@/8Shared/Header/Header";
import { Navbar } from "@/8Shared/Navbar/Navbar";
import { Footer } from "@/8Shared/Footer/Footer";
import { PropTypes } from "prop-types";
import cn from "classnames";

const MainLayout = (porps) => {
    const { children, user, className } = porps;
    // console.log("MainLayout.jsx auth", user);
    return (
        <div className={cn(s.mainLayout, className)}>
            <Header>
                <Navbar user={user} />
            </Header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

MainLayout.propTypes = {};

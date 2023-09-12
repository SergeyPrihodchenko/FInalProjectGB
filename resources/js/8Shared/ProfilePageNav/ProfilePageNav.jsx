import { useContext } from "react";
import { AppPage } from "../../5Layouts/AppPage/AppPage";
import s from "./Profilepagenav.module.css";
import AppText from "../ui/AppText/AppText";
import AppButton from "../ui/AppButton/AppButton";
import { BootstrapIcon } from "../Icon/BootstrapIcon";

//import PropTypes from 'prop-types';
//import { CgSearchLoading } from "react-icons/cg";

export const ProfilePageNav = () => {
    return (
        <nav className={s.navProfilePage}>
            <AppPage>
                <AppText
                    size="m"
                    bold
                    title={
                        <div className={s.nav}>
                            <ul className={s.navMenu}>
                                <li href="#" className={s.navLink}>
                                    Мои резюме
                                </li>
                                <li href="#" className={s.navLink}>
                                    Отклики
                                </li>
                                <li href="#" className={s.navLink}>
                                    Помощь
                                </li>
                            </ul>
                            <div className={s.navMenuSerch}>
                                <a href="#" className={s.navLink}>
                                    <BootstrapIcon
                                        name={"BsSearch"}
                                        size={30}
                                    />
                                </a>
                                <a href={route("resumePage")}>
                                    <div className={s.navLink}>
                                        <AppButton variant="outline" size="l">
                                            <AppText
                                                size={"m"}
                                                bold
                                                title={"Создать резюме"}
                                            />
                                        </AppButton>
                                </div></a>
                                
                            </div>
                        </div>
                    }
                />
            </AppPage>
        </nav>
    );
};

//ProfilePageNav.propTypes = {}

import s from "./Footer.module.css";
import { AppPage } from "../../5Layouts/AppPage/AppPage";
import { Typography } from "../../8Shared/Typography/Typography";
import { SocialLinksWidget } from "../SocialLinksWidget/SocialLinksWidget";
import { BootstrapIcon } from "../../8Shared/Icon/BootstrapIcon";
import AppText from "../../8Shared/ui/AppText/AppText";
import cn from "classnames";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
const socialList = [
    {
        name: "telegram",
        icon: <BootstrapIcon name={"BsTelegram"} size={28} />,
        url: "https://web.telegram.org/k/",
    },
    {
        name: "whatsapp",
        icon: <BootstrapIcon name={"BsWhatsapp"} size={28} />,
        url: "https://web.whatsapp.com/",
    },
];

export const Footer = ({ children, className }) => {
    return (
        <footer className={cn(s.footer, className)}>
            <AppPage>
                <div className={s.footerTop}>
                    <div className={s.footerTopList}>
                        <AppText
                            title="Golden head"
                            size="m"
                            variant="secondary"
                            bold
                            className="mb-3"
                        />
                        <div className={s.footerNav}>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                О компании
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Наши вакансии
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Реклама на сайте
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Требования к ПО
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Защита персональных данных
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Партнерам
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Адрес
                            </AppLink>
                            <AppLink
                                colorType={"lightAccent"}
                                href={route("main")}
                            >
                                Инвесторам
                            </AppLink>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={s.footerBottom}>
                    <span>© 2023 Группа компаний GoodJob</span>
                    {/* <SocialLinksWidget list={socialList} /> */}
                </div>
            </AppPage>
        </footer>
    );
};

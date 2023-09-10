import s from "./Footer.module.css";
import { AppPage } from "../AppPage/AppPage";
import { Typography } from "../Typography/Typography";
import { SocialLinksWidget } from "../../4Widgets/SocialLinksWidget/SocialLinksWidget";
import { BootstrapIcon } from "../Icon/BootstrapIcon";
import AppText from "../ui/AppText/AppText";

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

export const Footer = ({ children }) => {
    return (
        <footer className={s.footer}>
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
                        <ul>
                            <li className="mb-1">О компании</li>
                            <li className="mb-1">Наши вакансии</li>
                            <li className="mb-1">Реклама на сайте</li>
                            <li className="mb-1">Требования к ПО</li>
                            <li className="mb-1">Защита персональных данных</li>
                            <li className="mb-1">Безопасный Golden Head</li>
                            <li className="mb-1">Партнерам</li>
                            <li>Инвесторам</li>
                        </ul>
                    </div>
                    <div className={s.footerTopList}>
                        <AppText
                            title="Сервисы для соискателей"
                            size="m"
                            variant="secondary"
                            bold
                            className="mb-3"
                        />
                        <ul className={s.footerTopList}>
                            <li className="mb-1">Готовое резюме</li>
                            <li className="mb-1">Все сервисы</li>
                            <li className="mb-1">Продвижение резюме</li>
                            <li className="mb-1">Хочу у вас работать</li>
                            <li className="mb-1">Производственный календарь</li>
                            <li className="mb-1">
                                Карьера для молодых специалистов
                            </li>
                            <li className="mb-1">Школа программистов</li>
                            <li>Профориентация</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={s.footerBottom}>
                    <span>© 2023 Группа компаний GoldenHead</span>
                    <SocialLinksWidget list={socialList} />
                </div>
            </AppPage>
        </footer>
    );
};

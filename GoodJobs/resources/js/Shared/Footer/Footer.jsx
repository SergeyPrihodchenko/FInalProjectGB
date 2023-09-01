import s from './Footer.module.css';
import { AppPage } from "../AppPage/AppPage"
import { Typography } from '../Typography/Typography';

export const Footer = ({ children }) => {
    return (
        <footer className={s.footer}>
            <AppPage>
                <div className={s.footerTop}>
                    <div className={s.footerTopList}>
                        <Typography variant={'h3'} >Golden head</Typography>
                        <ul >
                            <li>О компании</li>
                            <li>Наши вакансии</li>
                            <li>Реклама на сайте</li>
                            <li>Требования к ПО</li>
                            <li>Защита персональных данных</li>
                            <li>Безопасный Golden Head</li>
                            <li>Партнерам</li>
                            <li>Инвесторам</li>
                        </ul>
                    </div>
                    <div className={s.footerTopList}>
                        <Typography variant={'h3'} >Сервисы для соискателей</Typography>
                        <ul className={s.footerTopList}>
                            <li>Готовое резюме</li>
                            <li>Все сервисы</li>
                            <li>Продвижение резюме</li>
                            <li>Хочу у вас работать</li>
                            <li>Производственный календарь</li>
                            <li>Карьера для молодых специалистов</li>
                            <li>Школа программистов</li>
                            <li>Профориентация</li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div className={s.footerBottom}>
                    <span>© 2023 Группа компаний GoldenHead</span>
                </div>
            </AppPage>
        </footer>
    )
}
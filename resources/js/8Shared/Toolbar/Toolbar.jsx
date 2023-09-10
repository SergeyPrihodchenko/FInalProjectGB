import cn from "classnames";
import s from "./Toolbar.module.css";
import { AppPage } from "../../5Layouts/AppPage/AppPage";

export const Toolbar = ({ children }) => {
    return (
        <div className={cn(s.toolbar)}>
            <AppPage>
                <ul className={s.toolbarGroup}>
                    <li>
                        <a href="#" className={s.toolbarink}>
                            Соискателям
                        </a>
                    </li>
                    <li>
                        <a href="#" className={s.toolbarink}>
                            Работодателям
                        </a>
                    </li>
                </ul>
            </AppPage>
        </div>
    );
};

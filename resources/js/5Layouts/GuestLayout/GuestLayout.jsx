import cn from "classnames";
import s from "./GuestLayout.module.css";
import MainLayout from "../MainLayout/MainLayout";
export default function Guest({ children, className }) {
    return (
        <MainLayout className="app_light_theme">
            <div className={cn(s.layout, className)}>
                <div className={cn(s.form)}>{children}</div>
            </div>
        </MainLayout>
    );
}

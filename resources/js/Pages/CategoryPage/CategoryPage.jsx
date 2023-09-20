import s from "./CategoryPage.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { Head } from "@inertiajs/react";

const CategoryPage = ({ auth, vacancies, titleCat }) => {
    const user = auth?.user;
    return (
        <MainLayout className="app_light_theme" user={user}>
            <Head title={`${titleCat}`} />
            <AppPage>
                <AppText
                    title={`${titleCat}`}
                    size="l"
                    bold
                    className={s.categoryPageTitle}
                />

                <div className="flex flex-col gap-[20px] mb-[20px]">
                    {vacancies.map((vac) => (
                        <AppLink
                            path={"vacancy.show"}
                            param={vac.id}
                            key={vac.id}
                        >
                            <AppCard
                                width={"100%"}
                                height={"200px"}
                                variant="primary"
                                shadow
                                className={s.categoryPageCard}
                            >
                                <AppText title={vac.title} />
                                <AppText text={`от ${vac.payment} руб.`} />
                                <AppText
                                    size="s"
                                    variant="notaccented"
                                    text={`Опыт работы от ${vac.experience} лет`}
                                />
                                <AppButton
                                    className={s.categoryPageCardBtn}
                                    width="auto"
                                    height="32px"
                                >
                                    Откликнуться
                                </AppButton>
                            </AppCard>
                        </AppLink>
                    ))}
                </div>
            </AppPage>
        </MainLayout>
    );
};
export default CategoryPage;

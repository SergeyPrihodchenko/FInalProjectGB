import MainLayout from "@/4Layouts/MainLayout/MainLayout";
import { AppPage } from "@/8Shared/AppPage/AppPage";
import React, { useState } from "react";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppLink from "@/8Shared/ui/AppLink/AppLink";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

const Vacancy = ({ vacancies, title, auth }) => {
    const user = auth?.user;
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <AppPage>
                <AppText
                    title={`${title}`}
                    size="l"
                    bold
                    className="m-[20px]"
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
                                borderLeft
                                borderRadius
                                className={"flex flex-col items-start p-5"}
                            >
                                <AppText title={vac.title} />
                                <AppText text={`от ${vac.payment} руб.`} />
                                <AppText
                                    size="s"
                                    variant="notaccented"
                                    text={`Опыт работы от ${vac.experience} лет`}
                                />
                                <AppButton
                                    className={
                                        "px-[12px] mt-auto rounded-[20px]"
                                    }
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

export default Vacancy;

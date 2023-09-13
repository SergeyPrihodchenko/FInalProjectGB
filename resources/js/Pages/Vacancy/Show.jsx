import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import AppCard from "@/8Shared/ui/AppCard/AppCard";
import AppText from "@/8Shared/ui/AppText/AppText";
import React, { useState } from "react";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import { Head } from "@inertiajs/react";

const Vacancy = ({ vacancy, auth }) => {
    const user = auth?.user;
    console.log(vacancy);
    return (
        <MainLayout className={"app_light_theme"} user={user}>
            <Head title={`${vacancy.title}`} />
            <AppPage>
                <div className="flex justify-between">
                    <AppCard
                        width={"60%"}
                        shadow
                        className="m-[20px] px-[15px] py-[20px]"
                    >
                        <AppText
                            title={vacancy.title}
                            size="l"
                            bold
                            className="mb-[20px]"
                        />
                        <AppText
                            size="s"
                            text={`Требуемый опыт работы: ${vacancy.experience} лет`}
                        />
                    </AppCard>
                    <AppCard shadow className="m-[20px] px-[15px] py-[20px]">
                        <AppText
                            title={"ООО Maxima"}
                            size="l"
                            bold
                            className="mb-[20px]"
                        />
                        <AppText text={`Карточка компании`} />
                    </AppCard>
                </div>
            </AppPage>
        </MainLayout>
    );
};

export default Vacancy;

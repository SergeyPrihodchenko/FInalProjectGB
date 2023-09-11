import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AppCard from "@/Shared/ui/AppCard/AppCard";
import AppText from "@/Shared/ui/AppText/AppText";
import React, { useState } from "react";
import { AppPage } from "@/Shared/AppPage/AppPage";
import { Head } from "@inertiajs/react";

const CreateVacancy = () => {

    console.log('vacancy create page')
    return (
        <MainLayout className={'app_light_theme'}>
            {/*<Head title={`${vacancy.title}`} />*/}
            {/*<AppPage>*/}
            {/*    <div className="flex justify-between">*/}
            {/*        <AppCard*/}
            {/*            width={'60%'}*/}
            {/*            shadow*/}
            {/*            className='m-[20px] px-[15px] py-[20px]'*/}
            {/*        >*/}
            {/*            <AppText*/}
            {/*                title={vacancy.title}*/}
            {/*                size="l"*/}
            {/*                bold*/}
            {/*                className="mb-[20px]"*/}
            {/*            />*/}
            {/*            <AppText*/}
            {/*                size="s"*/}
            {/*                text={`Требуемый опыт работы: ${vacancy.experience} лет`}*/}
            {/*            />*/}
            {/*        </AppCard>*/}
            {/*        <AppCard*/}
            {/*            shadow*/}
            {/*            className='m-[20px] px-[15px] py-[20px]'*/}
            {/*        >*/}
            {/*            <AppText*/}
            {/*                title={'ООО Maxima'}*/}
            {/*                size="l"*/}
            {/*                bold*/}
            {/*                className="mb-[20px]"*/}
            {/*            />*/}
            {/*            <AppText*/}
            {/*                text={`Карточка компании`}*/}
            {/*            />*/}
            {/*        </AppCard>*/}

            {/*    </div>*/}

            {/*</AppPage>*/}


        </MainLayout>

    )
}

export default CreateVacancy

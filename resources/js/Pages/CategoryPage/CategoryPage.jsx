import s from "./CategoryPage.module.css"
import { AppPage } from '@/Shared/AppPage/AppPage';
import MainLayout from "@/Layouts/MainLayout/MainLayout";
import AppText from "@/Shared/ui/AppText/AppText";
import AppLink from "@/Shared/ui/AppLink/AppLink";
import AppCard from "@/Shared/ui/AppCard/AppCard";
import AppButton from "@/Shared/ui/AppButton/AppButton";
import { Head } from "@inertiajs/react";


const CategoryPage = ({ auth, vacancies, titleCat }) => {
    const user = auth?.user;
    return (
        <MainLayout user={user} className={'app_light_theme'}>
            <Head title={`${titleCat}`} />
            <AppPage>
                <AppText
                    title={`${titleCat}`}
                    size="l"
                    bold
                    className="m-[20px]"
                />

                <div className="flex flex-col gap-[20px] mb-[20px]">
                    {vacancies.map(vac =>
                        <AppLink
                            path={'vacancy.show'}
                            param={vac.id}
                            key={vac.id}
                        >
                            <AppCard
                                width={'100%'}
                                height={'200px'}
                                variant='primary'
                                shadow
                                borderLeft
                                borderRadius
                                className={'flex flex-col items-start p-5'}
                            >
                                <AppText
                                    title={vac.title}
                                />
                                <AppText
                                    text={`от ${vac.payment} руб.`}
                                />
                                <AppText
                                    size='s'
                                    variant='notaccented'
                                    text={`Опыт работы от ${vac.experience} лет`}
                                />
                                <AppButton
                                    className={'px-[12px] mt-auto rounded-[20px]'}
                                    width='auto'
                                    height='32px'
                                >
                                    Откликнуться
                                </AppButton>
                            </AppCard>
                        </AppLink>
                    )}

                </div>

            </AppPage>
        </MainLayout>
    );
}
export default CategoryPage;
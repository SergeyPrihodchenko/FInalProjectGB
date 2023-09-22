import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import {AppPage} from "@/5Layouts/AppPage/AppPage";
import React, {useState} from "react";
import {useForm} from "@inertiajs/react";
import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./CreateCompany.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

const Company = ({auth}) => {
    const user = auth?.user;

    const {data, setData, post, errors} = useForm({
        name: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('company.store'))
    }

    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <AppText
                    title={"Новая компания"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />

                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="title">Имя:</label>
                    <input id="title" value={data.name} onChange={e => setData('name', e.target.value)} />

                    <button type="submit">Отправить</button> */}

                    <div className={s.basiceData}>
                            <AppInput 
                                label={"Email"}
                                type="text" 
                                placeholder="Email"
                                className={s.indentDownBasiceData}
                            />
                                                      
                            <AppInput 
                                label={"Наименование"} 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                type="text" 
                                placeholder="Наименование"
                                className={s.indentDownBasiceData}
                            />
                                                        
                            <AppInput 
                                label={"Сферы деятельности"} 
                                type="text" 
                                placeholder="IT, Металлургия, Услуги"
                                className={s.indentDownBasiceData}
                            />
                                                       
                            <AppText
                                title={"Логотип компании"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                            <form>
                                <div className={s.logoUpload}>
                                    <input
                                        type="file"
                                        multiple accept="image/*,image/jpeg, image/png"
                                        className={s.inputlogoUpload}
                                    />
                                    <AppButton 
                                        type="submit"
                                        bold 
                                        sizeText = "s"
                                        className={s.buttonUpload}>
                                            <span>Загрузить</span>
                                        </AppButton>
                                </div>
                            </form>  
                           
                            <AppInput 
                                label={"Город или регион расположения"} 
                                type="text"
                                placeholder="Москва"
                                className={s.indentDownBasiceData} 
                            />
                            
                            <AppInput 
                                label={"Город или регион расположения"} 
                                type="date" 
                                width="140px"
                                className={s.indentDownBasiceData}
                            />
                                                    
                            <AppInput 
                                label={"Контактный номер телефона"}  
                                type="text"
                                placeholder="+7 (999) 999-99-99"
                                className={s.indentDownBasiceData} 
                            />
                           
                            <AppInput 
                                label={"Сай компании"} 
                                type="text"
                                placeholder="https://GoodJobs.ru/"
                                className={s.indentDownBasiceData} 
                            />


                            <AppText
                                title={"Расскажите о вашей компании"}
                                bold
                                size={"xs"}
                                className={s.textTitle}
                            />
                                <textarea
                                    className={s.textareaBasiceData}
                                    placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                                />
                        </div> 
                        <form method="LINK" action={route("companyList")}>
                            <AppButton 
                                // type="submit"
                                bold 
                                sizeText = "s"
                                className={s.buttonSave}>
                                    <span>Сохранить</span>
                            </AppButton>
                        </form>
                </form>
            </AppPage>
        </MainLayout>
    );
};
export default Company;


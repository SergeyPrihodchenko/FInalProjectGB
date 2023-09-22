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
                {/* <h1>Новая компания</h1> */}
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="title">Имя:</label>
                    <input id="title" value={data.name} onChange={e => setData('name', e.target.value)} />

                    <button type="submit">Отправить</button> */}

                    <div className={s.basiceData}>
                            {/* <AppText
                                title={"Email"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            /> */}
                            <AppInput 
                                label={"Email"}
                                type="text" 
                                placeholder="Email"
                                
                                className={s.inputBasiceData}
                            />
                                                      
                            <AppText
                                title={"Наименование"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                type="text" 
                                placeholder="Наименование"
                                className={s.inputBasiceData}
                            />
                                                        
                            <AppText
                                title={"Сферы деятельности"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                type="text" 
                                placeholder="IT, Металлургия, Услуги"
                                className={s.inputBasiceData}
                            />
                                                       
                            <AppText
                                title={"Логотип компании"}
                                bold
                                size={"s"}
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
                                        sizeText = "m"
                                        className={s.buttonUpload}>
                                            <span>Загрузить</span>
                                        </AppButton>
                                </div>
                            </form>  
                            
                            <AppText
                                title={"Город или регион расположения"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                type="text"
                                placeholder="Москва"
                                className={s.inputBasiceData} 
                            />
                            
                            <AppText
                                title={"Дата создания"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                type="date" 
                                className={s.inputResumeDataBasice}
                            />
                                                    
                            <AppText
                                title={"Контактный номер телефона"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                type="text"
                                placeholder="+7 (999) 999-99-99"
                                className={s.inputBasiceData} 
                            />
                            <AppText
                                title={"Сай компании"}
                                bold
                                size={"s"}
                                className={s.textTitle}
                            />
                            <input 
                                type="text"
                                placeholder="https://GoodJobs.ru/"
                                className={s.inputBasiceData} 
                            />


                            <AppText
                                title={"Расскажите о вашей компании"}
                                bold
                                size={"s"}
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
                                sizeText = "m"
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


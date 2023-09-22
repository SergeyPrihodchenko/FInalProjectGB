import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import {AppPage} from "@/5Layouts/AppPage/AppPage";
import React, {useState} from "react";
import {useForm} from "@inertiajs/react";

const Company = ({auth}) => {
    const user = auth?.user;

    const {data, setData, post, errors} = useForm({

        email: '',
        name: '',
        business_profile: '',
        website: '',
        region_of_location: '',
        phone_number: '',
        description: '',
        date_create: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('company.store'))
    }

    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <h1>Новая компания</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" value={data.email} onChange={e => setData('email', e.target.value)} />
                    <label htmlFor="name">Имя:</label>
                    <input id="name" value={data.name} onChange={e => setData('name', e.target.value)} />
                    <label htmlFor="business_profile">Сфера деятельности:</label>
                    <input id="business_profile" value={data.business_profile} onChange={e => setData('business_profile', e.target.value)} />
                    <label htmlFor="website">Сайт:</label>
                    <input id="website" value={data.website} onChange={e => setData('website', e.target.value)} />
                    <label htmlFor="region_of_location">Город или регион расположения:</label>
                    <input id="region_of_location" value={data.region_of_location} onChange={e => setData('region_of_location', e.target.value)} />
                    <label htmlFor="date_create">Дата основания:</label>
                    <input id="date_create" value={data.date_create} onChange={e => setData('date_create', e.target.value)} />
                    <label htmlFor="phone_number">Контактный номер телефона:</label>
                    <input id="phone_number" value={data.phone_number} onChange={e => setData('phone_number', e.target.value)} />
                    <label htmlFor="description">Раскажите о всоей компании:</label>
                    <input id="description" value={data.description} onChange={e => setData('description', e.target.value)} />


                    <button type="submit">Отправить</button>
                </form>
            </AppPage>
        </MainLayout>
    );
};
export default Company;


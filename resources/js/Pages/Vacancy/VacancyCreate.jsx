import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import React, { useState } from "react";
// import {Inertia} from '@inertiajs/inertia';
import { useForm } from "@inertiajs/react";

const Vacancy = ({ auth, companies }) => {
    console.log('companies', companies)
    const user = auth?.user;

    const { data, setData, post, errors } = useForm({
        title: '',
        payment: '',
        experience: '',
        company_id: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('vacancy.store'))
    }

    return (
        <MainLayout className={"app_light_theme"}>
            <AppPage>
                <h1>Создание вакансии</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Имя:</label>
                    <input id="title" value={data.title} onChange={e => setData('title', e.target.value)} />

                    <label htmlFor="payment">payment:</label>
                    <input id="payment" value={data.payment} onChange={e => setData('payment', e.target.value)} />

                    <label htmlFor="experience">Expa:</label>
                    <input id="experience" value={data.experience} onChange={e => setData('experience', e.target.value)} />

                    <label htmlFor="company_id">Company:</label>
                    <input id="company_id" value={data.company_id} onChange={e => setData('company_id', e.target.value)} />

                    <button type="submit">Отправить</button>
                </form>
            </AppPage>
        </MainLayout>
    );
};
export default Vacancy;

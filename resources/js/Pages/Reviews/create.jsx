import { AppPage } from "@/5Layouts/AppPage/AppPage.jsx";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Review = ({ auth, cities, company }) => {
    const user = auth?.user;

    const {data, setData, post, errors} = useForm({
//форма заполнена по умолчанию, чтобы не заполнять каждый раз, временно
        rating: '',
        content: '',
        user_id: user?.id,
        company_id: company.id
    })


    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("reviews.store"));
    };

    return (
        <>
            <AppPage>
                <h1>Новый отзыв</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="content">Ваш отзыв:</label>
                    <input id="content" value={data.content} onChange={e => setData('content', e.target.value)} />
                    <label htmlFor="rating">Ваш отзыв:</label>
                    <input id="rating" value={data.rating} type={"number"} onChange={e => setData('rating', e.target.value)} />
                    <button type="submit">Отправить</button>
                </form>
            </AppPage>
        </>
    );
};
export default Review;

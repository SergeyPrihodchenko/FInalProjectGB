import MainLayout from "@/5Layouts/MainLayout/MainLayout";
import {AppPage} from "@/5Layouts/AppPage/AppPage";
// import React, {useState} from "react";
// import {useForm} from "@inertiajs/react";
//
// const ReviewsOfCompany = ({auth}) => {
//     const user = auth?.user;
//
//     const {data, setData, post, errors} = useForm({
//         review: '',
//     })
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         post(route('reviewsOfCompany.store'))
//     }
//
//     return (
//         <MainLayout className={"app_light_theme"}>
//             <AppPage>
//                 <h1>Новый отзыв</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="title">Имя:</label>
//                     <input id="title" value={data.review} onChange={e => setData('review', e.target.value)} />
//
//                     <button type="submit">Отправить</button>
//                 </form>
//             </AppPage>
//         </MainLayout>
//     );
// };
// export default ReviewsOfCompany;

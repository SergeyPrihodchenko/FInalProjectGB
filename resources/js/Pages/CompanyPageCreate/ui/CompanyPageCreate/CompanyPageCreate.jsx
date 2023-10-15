import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import PropTypes from "prop-types";
import s from "./CompanyPageCreate.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useSelector } from "react-redux";


function CompanyPageCreate({ auth,  cities }) {
    const user = auth?.user;

    const [selectedImage, setSelectedImage] = useState(null);
    const {data, setData, post, errors} = useForm({
//форма заполнена по умолчанию, чтобы не заполнять каждый раз, временно
        email: '',
        name: '',
        business_profile: '',
        website: '',
        region_of_location: '',
        phone_number: '',
        description: '',
        date_create: '',
        logo: '',
        city: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("company.store"));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        console.log('file', file);
        setData('logo', file);
    };

    //Ввод данных компании
    const [emailCompanyInput, setEmailCompanyInput] = useState("");
    const [nameCompanyInput, setNameCompanyInput] = useState("");
    const [areasActivityCompanyInput, setAreasActivityCompanyInput] =
        useState("");
    const [regionLocationCompanyInput, setRegionLocationCompanyInput] =
        useState("");
    const [foundationDateCompanyInput, setFoundationDateCompanyInput] =
        useState("");
    const [phoneCompanyInput, setPhoneCompanyInput] = useState("");
    const [siteCompanyInput, setSiteCompanyInput] = useState("");
    const [aboutCompamyTextarea, setAboutCompanyTextarea] = useState("");

    return (
        <>
            <AppPage>
                <AppText
                    title={"Новая компания"}
                    bold
                    size={"s"}
                    className={s.textTitle}
                />

                <form onSubmit={handleSubmit} encType='multipart/form-data'>


                    {/* Ввод данных компании */}
                    <div className={s.basiceData}>
                        <AppInput
                            value={data.email}
                            onChange={(e) =>
                                setData('email', e.target.value)
                            }
                            label={"Email"}
                            type="text"
                            placeholder="Email"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            label={"Наименование"}
                            type="text"
                            placeholder="Наименование"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={data.business_profile}
                            onChange={(e) =>
                                setData('business_profile', e.target.value)
                            }
                            label={"Сферы деятельности"}
                            type="text"
                            placeholder="IT, Металлургия, Услуги"
                            className={s.indentDownBasiceData}
                        />
                        <AppInput
                           id='region_of_location'
                           name='region_of_location'
                           value={data.region_of_location}
                           onChange={
                               (e) => setData("region_of_location", e.target.value)
                           }
                        //    value={regionLocationCompanyInput}
                        //     onChange={(e) =>
                        //         setRegionLocationCompanyInput(e.value.target)
                        //     }
                            label={"Юридический адрес компании"}
                            type="text"
                            placeholder="117418 Москва, ул. Новоселов стр 1 офис 5"
                            className={s.indentDownBasiceData}
                        />
                        <AppText
                            title={"Логотип компании"}
                            bold
                            size={"xs"}
                            className={s.textTitle}
                        />
                        <div className={s.logoCompanyUpload}>
                            <div className={s.fileLoadBlock}>
                                <AppInput
                                    type="file"
                                    id="file"
                                    className={s.fileCompany}
                                    onChange={handleImageChange}
                                />
                                <div className={s.inputlogoUpload}>
                                    <input
                                        type="text"
                                        className={s.inputCity}
                                    />
                                    <AppButton
                                        type="submit"
                                        bold
                                        sizeText = "xs"
                                    ><span>Загрузить</span>
                                    </AppButton>
                                    </div>
                                </div>
                        </div>
                            <label htmlFor="city_id">
                                <AppText
                                    title = {"Город"}
                                    bold
                                    size={"xs"}
                                >
                                </AppText>
                            </label>
                            <select
                                id='city_id'
                                name='city'
                                value={data.city}
                                onChange={
                                    (e) => setData("city", e.target.value)
                                }
                                className={s.inputCity}
                            >
                                {cities.map((city, index) => (
                                    <option
                                        key={index}
                                        value={city.title}
                                        className={s.textTitle}
                                    >
                                            {city.title}
                                    </option>
                                ))}
                            </select>

                        <AppInput
                            value={data.date_create}
                            onChange={(e) =>
                                setData('date_create', e.target.value)
                            }
                            label={"Дата основания"}
                            type="date"
                            width="140px"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={data.phone_number}
                            onChange={(e) =>
                                setData('phone_number', e.target.value)
                            }
                            label={"Контактный номер телефона"}
                            type="text"
                            placeholder="+7 (999) 999-99-99"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={data.website}
                            onChange={(e) =>
                                setData('website', e.target.value)
                            }
                            label={"Сайт компании"}
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
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            className={s.textareaBasiceData}
                            placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                        />
                    </div>

                    <AppButton
                        type="submit"
                        bold
                        sizeText="s"
                        className={s.buttonSave}
                    >
                        <span>Сохранить</span>
                    </AppButton>
                </form>
            </AppPage>
        </>
    );
}

export default CompanyPageCreate;

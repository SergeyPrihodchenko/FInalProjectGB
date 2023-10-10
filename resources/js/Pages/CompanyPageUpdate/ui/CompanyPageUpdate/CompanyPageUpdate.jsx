import React from "react";
import PropTypes from "prop-types";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import {router, useForm} from "@inertiajs/react";
import s from "./CompanyPageUpdate.module.css";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppInput from "@/8Shared/ui/AppInput/AppInput";

function CompanyPageUpdate({ company, auth }) {
    const user = auth?.user;

    const { data, setData, put, errors } = useForm({
        //форма заполнена по умолчанию, что бы не заполнять каждый раз, временно
        email: company.email,
        name: company.name,
        business_profile: company.business_profile,
        website: company.website,
        region_of_location: company.region_of_location,
        phone_number: company.phone_number,
        description: company.description,
        date_create: company.date_create,
        city: company.city,
    });
    console.log(company);
    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("company.update", company.id)); //определится с методом
    };
    const destroy = () => {
        router.delete(route("company.destroy", company.id));
    };

    return (
        <AppPage>
            <AppText
                title={"Редактирование компании"}
                bold
                size={"s"}
                className={s.textTitle}
            />

            <form onSubmit={handleSubmit}>
                <div className={s.basiceData}>
                    <AppInput
                        value={data.email}
                        onChange={(e) =>
                            setData('email', e.target.value)
                        }
                        label={"Email"}
                        type="text"
                        className={s.indentDownBasiceData}
                    />


                    <AppInput
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        label={"Наименование"}
                        type="text"
                        className={s.indentDownBasiceData}
                    />


                    <AppInput
                        value={data.business_profile}
                        onChange={(e) =>
                            setData('business_profile', e.target.value)
                        }
                        label={"Сферы деятельности"}
                        type="text"
                        className={s.indentDownBasiceData}
                    />

                    <AppInput
                        value={data.region_of_location}
                        onChange={(e) =>
                            setData("region_of_location", e.target.value)
                        }
                        label={"Юридический адрес компании"}
                        type="text"
                        className={s.indentDownBasiceData}
                    />
                    {/*<select id='region_of_location' name='region_of_location' value={data.region_of_location} onChange={(e) => setData("region_of_location", e.target.value)}>*/}
                    {/*    {cities.map((city, index) => (*/}
                    {/*        <option key={index} value={city.title}>{city.title}</option>))}*/}
                    {/*</select>*/}
                    {/* <label htmlFor="region_of_location">
                            Город или регион расположения:
                        </label>
                        <input
                            id="region_of_location"
                            value={data.region_of_location}
                            onChange={(e) =>
                                setData("region_of_location", e.target.value)
                            }
                        /> */}
                    <AppInput
                        value={data.city}
                        onChange={(e) =>
                            setData("city", e.target.value)
                        }
                        label={"Город"}
                        type="text"
                        className={s.indentDownBasiceData}
                    />

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
                        className={s.indentDownBasiceData}
                    />

                    <AppInput
                        value={data.website}
                        onChange={(e) =>
                            setData('website', e.target.value)
                        }
                        label={"Сайт компании"}
                        type="text"
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
                    />
                </div>

                <div className={s.buttonUpdateResume}>
                    <AppButton
                        sizeText="s"
                        bold
                        type="submit"
                    >
                        Изменить
                    </AppButton>

                    <AppButton
                        onClick={destroy}
                        id={company.id}
                        type="button"
                        sizeText="s"
                        bold
                        className={s.buttonDeleteResume}
                    >
                        Удалить
                    </AppButton>


                </div>

            </form>
        </AppPage>
    );
}

CompanyPageUpdate.propTypes = {};

export default CompanyPageUpdate;

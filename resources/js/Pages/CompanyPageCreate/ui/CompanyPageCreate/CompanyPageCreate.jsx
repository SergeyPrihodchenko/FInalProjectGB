import React from "react";
import PropTypes from "prop-types";
import s from "./CompanyPageCreate.module.css";
import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import AppButton from "@/8Shared/ui/AppButton/AppButton";

function CompanyPageCreate({ auth }) {
    const user = auth?.user;

    const { data, setData, post, errors } = useForm({
        name: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("company.store"));
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

                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="title">Имя:</label>
                    <input id="title" value={data.name} onChange={e => setData('name', e.target.value)} />

                    <button type="submit">Отправить</button> */}

                    {/* Ввод данных компании */}
                    <div className={s.basiceData}>
                        <AppInput
                            value={emailCompanyInput}
                            onChange={(e) =>
                                setEmailCompanyInput(e.target.value)
                            }
                            label={"Email"}
                            type="text"
                            placeholder="Email"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={nameCompanyInput}
                            onChange={(e) =>
                                setNameCompanyInput(e.target.value)
                            }
                            // value={data.name}
                            // onChange={e => setData('name', e.target.value)}
                            label={"Наименование"}
                            type="text"
                            placeholder="Наименование"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={areasActivityCompanyInput}
                            onChange={(e) =>
                                setAreasActivityCompanyInput(e.target.value)
                            }
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

                        <div className={s.logoCompanyUpload}>
                            <div className={s.fileLoadBlock}>
                                <input
                                    type="file"
                                    id="file"
                                    className={s.fileCompany}
                                />
                                <div className={s.inputlogoUpload}>
                                    <input
                                        type="text"
                                        className={s.textFileCompany}
                                    />
                                    <AppButton type="submit" bold sizeText="xs">
                                        <span>Загрузить</span>
                                    </AppButton>
                                </div>
                            </div>
                        </div>

                        <AppInput
                            value={regionLocationCompanyInput}
                            onChange={(e) =>
                                setRegionLocationCompanyInput(e.value.target)
                            }
                            label={"Город или регион расположения"}
                            type="text"
                            placeholder="Москва"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={foundationDateCompanyInput}
                            onChange={(e) =>
                                setFoundationDateCompanyInput(e.value.target)
                            }
                            label={"Дата основания"}
                            type="date"
                            width="140px"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={phoneCompanyInput}
                            onChange={(e) =>
                                setPhoneCompanyInput(e.value.target)
                            }
                            label={"Контактный номер телефона"}
                            type="text"
                            placeholder="+7 (999) 999-99-99"
                            className={s.indentDownBasiceData}
                        />

                        <AppInput
                            value={siteCompanyInput}
                            onChange={(e) =>
                                setSiteCompanyInput(e.value.target)
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
                            value={aboutCompamyTextarea}
                            onChange={(e) =>
                                setAboutCompanyTextarea(e.value.target)
                            }
                            className={s.textareaBasiceData}
                            placeholder="Например, изучали и анализировали информацию, технические данные, показатели и результаты работы, обобщали и систематизировали их"
                        />
                    </div>

                    <AppButton
                        href={route("companyList")}
                        type="button"
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

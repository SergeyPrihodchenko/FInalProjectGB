import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "../VacancyPageCreate/VacancyPageCreate.module.css";
import {
    setContactsList,
    setContactsNameInput,
    setContactsPhoneInput,
    setContactsPositionInput,
} from "../../model/slice/vacancyPageCreateSlice";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import AppText from "@/8Shared/ui/AppText/AppText";
function VacancyCreateContacts({ errors }) {
    const {
        contactsNameInput,
        contactsPositionInput,
        contactsPhoneInput,
        contactsList,
    } = useSelector((state) => state.vacancyPageCreate);
    const dispatch = useDispatch();
    return (
        <div>
            <AppText title="Контактные данные" size="m" className={s.item} />
            {contactsList ? (
                <div className={s.contactsList}>
                    {contactsList?.map((contactsItem, index) => {
                        console.log(
                            "contactsItem",
                            contactsItem,
                            ", contactsItem-index",
                            index
                        );
                        return (
                            <div className={s.listItem} key={index}>
                                <div>{contactsItem?.phone}</div>-
                                <div>{contactsItem?.name}</div>
                                <div>{contactsItem?.position}</div>
                                <AppButton
                                    sizeText={"xs"}
                                    variant={"clear"}
                                    colorType={"cancel"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log("delete-index", index);
                                        console.log(
                                            "contactsList-delete-item",
                                            contactsList[index]
                                        );
                                        contactsList.splice(index, 1);
                                        const newContactsList = [
                                            ...contactsList,
                                        ];

                                        dispatch(
                                            setContactsList([
                                                ...newContactsList,
                                            ])
                                        );
                                    }}
                                >
                                    Удалить
                                </AppButton>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            <AppInput
                errorMessage={errors.title}
                label="Контакты"
                placeholder="Должность"
                value={contactsPositionInput}
                onChange={(e) => {
                    dispatch(setContactsPositionInput(e.target.value));
                }}
            />
            <AppInput
                errorMessage={errors.title}
                placeholder="Имя"
                value={contactsNameInput}
                onChange={(e) => {
                    dispatch(setContactsNameInput(e.target.value));
                }}
            />
            <AppInput
                errorMessage={errors.title}
                type="tel"
                placeholder="Номер телефона"
                value={contactsPhoneInput}
                onChange={(e) => {
                    dispatch(setContactsPhoneInput(e.target.value));
                }}
            />
            <AppButton
                variant="clear"
                colorType="hint"
                sizeText="s"
                onClick={(e) => {
                    e.preventDefault();
                    if (
                        contactsPositionInput &&
                        contactsPhoneInput &&
                        contactsNameInput
                    ) {
                        dispatch(
                            setContactsList([
                                ...contactsList,
                                {
                                    name: contactsNameInput,
                                    phone: contactsPhoneInput,
                                    position: contactsPositionInput,
                                },
                            ])
                        );
                    }

                    dispatch(setContactsNameInput(""));
                    dispatch(setContactsPhoneInput(""));
                    dispatch(setContactsPositionInput(""));
                }}
            >
                Добавить контакт
            </AppButton>
        </div>
    );
}

VacancyCreateContacts.propTypes = {};

export default VacancyCreateContacts;

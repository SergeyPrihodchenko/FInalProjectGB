import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import s from "../VacancyPageUpdate/VacancyPageUpdate.module.css";
import {
    setContactsList,
    setContactsNameInput,
    setContactsPhoneInput,
    setContactsPositionInput,
} from "../../model/slice/vacancyPageUpdateSlice";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import AppInput from "@/8Shared/ui/AppInput/AppInput";
import AppText from "@/8Shared/ui/AppText/AppText";
function VacancyCreateContacts(props) {
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
                label="Контакты"
                placeholder="Должность"
                value={contactsPositionInput}
                onChange={(e) => {
                    dispatch(setContactsPositionInput(e.target.value));
                }}
            />
            <AppInput
                placeholder="Имя"
                value={contactsNameInput}
                onChange={(e) => {
                    dispatch(setContactsNameInput(e.target.value));
                }}
            />
            <AppInput
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

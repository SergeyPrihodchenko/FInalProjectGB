import React from "react";
//import PropTypes from 'prop-types'
import s from "./UserBaceData.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import { useDispatch, useSelector } from "react-redux";
import { setYears, 
        setGenger, 
        setDayOfBirth
    } from "@/Pages/ResumePage/model/slice/ResumePageSlice";

function UserBaceData() {
    const dispatch = useDispatch();

    
    const {
        resumes, 
        authores,
        yearDateOfBirth, 
        genderOfUser, 
        dateOfBirthUser
    } = useSelector(state => state.resumePage);
    //console.log(authores);
    
    //высчитываем из даты рождения сколько полных лет
    const dateOfBirth = resumes.date_of_birth;
    dispatch(setYears(dateOfBirth));

    //переводим из падежа в существительное gender пользователя
    const dataGender = resumes.gender;
    dispatch(setGenger(dataGender));
    
    //форматируем дату рождения
    dispatch(setDayOfBirth(dateOfBirth));
              
    return (
       <div class={s.baceData}>
            <div class={s.userBaceData}>
                <AppText
                    title={resumes.last_name.concat(" ", resumes.first_name)}
                    size="s"
                    bold
                />
                <AppText 
                    size="s"
                    text={genderOfUser.concat(", ", yearDateOfBirth, ", ", dateOfBirthUser, " года рождения")}
                />
                <div className={s.userContacts}>
                    <AppText title={"Контакты"} size="s" />
                    <AppText
                        text={resumes.phone}
                        size="s"
                        className={s.userContactsPhone}
                    />
                    <div className={s.userEmail}>
                        <AppText
                             text={authores.email}
                            size="s" 
                            variant="accent"
                            className={s.userEmailText}   
                        />
                        <AppText
                            text={" — предпочитаемый способ связи"}
                            size="s"
                            className={s.emailLeftText}
                        />
                     </div>
                </div>

                <AppText 
                    text={resumes.region} 
                     size="s" 
                />
                <AppText 
                    text={"Готовность к переездам: ".concat(resumes.relocation)} 
                    size="s" 
                />
                <AppText 
                    text={"Готовность к командировкам: ".concat( resumes.buisness_travel)} 
                    size="s" 
                />
                {/* <div className={s.userSearchArea}>
                    <AppText
                        text={"Указан примерный район поиска работы"}
                        size="s"
                        variant={"error"}
                    />
                    <a href="#" className={s.linkResumePage}>
                        Показать карту
                    </a>
                </div> */}
                </div>
                <div class={s.userPhoto}>
                    НЕТ ФОТО
                    {/* <img src="#" className={s.imgUserPhoto}/> */}
                </div>
            </div>
        );
    }

//UserBaceData.propTypes = {}

export default UserBaceData;

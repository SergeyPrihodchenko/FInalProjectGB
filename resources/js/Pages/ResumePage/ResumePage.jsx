import React from "react";
import { usePage } from "@inertiajs/react";
//import PropTypes from 'prop-types'
import s from "./ResumePage.module.css";

import { AppPage } from "@/5Layouts/AppPage/AppPage";
import AppText from "@/8Shared/ui/AppText/AppText";
import AppButton from "@/8Shared/ui/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { setDataResume, 
        setDataAuthor,
        setYears, 
        setGenger, 
        setDayOfBirth, 
        setDateFormatWorkBegin, 
        setDateFormatWorkEnd,
        setWorksExperience
    } from "./model/slice/ResumePageSlice";
import List from "@/8Shared/List/List";


function ResumePage({ resume, author }) {
    //console.log(resume);
    const user = usePage().props.auth.user;
    const dispatch = useDispatch();

    dispatch(setDataResume(resume));
    dispatch(setDataAuthor(author));
    
    const {
        resumes, 
        authores,
        yearDateOfBirth, 
        genderOfUser, 
        dateOfBirthUser, 
        dataWorksBegin, 
        dataWorksEnd,
        yearWorksExperience 
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

                              
    //форматы даты и периода работы
    dispatch(setDateFormatWorkBegin());
    dispatch(setDateFormatWorkEnd());
                                                                              
    //расчет стажа
    dispatch(setWorksExperience());  

              
    return (
        <>
            <AppPage>
                <container className={s.containerResumePage}>
                    <main className={s.mainResumePage}>
                        <div class={s.baceData}>
                            <div class={s.userBaceData}>
                                <AppText
                                    title={resume.last_name.concat(" ", resume.first_name)}
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
                                        text={resume.phone}
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
                                    text={resume.region} 
                                    size="s" 
                                />
                                <AppText 
                                    text={"Готовность к переездам: ".concat(resume.relocation)} 
                                    size="s" 
                                />
                                <AppText 
                                    text={"Готовность к командировкам: ".concat( resume.buisness_travel)} 
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

                        <div className={s.userSpeciality}>
                            <AppText title={resume.profession} size="s" bold />
                            <div className={s.specialization}>
                                <AppText text={"Специализации:"} size="s" />
                                <List
                                    list={resume.educational_institute}
                                    renderItem={(el) =>
                                        <li key={el}>
                                            <AppText
                                                text={" - ".concat(el.specialization)}
                                                size="s"
                                                className={s.specializationText}   
                                            />
                                        </li>
                                    }
                                />        
                            </div> 

                            <AppText 
                                text={"Занятость: ".concat(resume.employment_type) } 
                                size="s" 
                            />

                            <AppText 
                                text={"График работы: ".concat(resume.schedule_type)} 
                                size="s" 
                            />   
                        </div>

                        <div className={s.workExperience}>
                                    {/* <AppText
                                        title={"4 года 9 месяцев"}
                                        size="s"
                                        bold
                                        variant={"error"}
                                    /> */}
                        
                        {
                            resume.companies.map((el) => {            
                                return (
                                    <>
                                        <div className={s.workPeriods}>
                                            <div className={s.userWorkPeriod}>
                                                <AppText
                                                    text={dataWorksBegin.concat(" - ", dataWorksEnd)}
                                                    size="s"
                                                />
                                                <AppText
                                                    text={yearWorksExperience}
                                                    size="s"
                                                />
                                            </div>

                                            <div className={s.descriptionExperience}>
                                                <div className={s.company}>
                                                    <AppButton
                                                        variant="clear"
                                                        sizeText="s"
                                                        className={s.userEmailText}
                                                        href="#"
                                                    >{el.name}
                                                    </AppButton>
                                                </div>
                                        
                                                <div className={s.responsibilities}>
                                                    <AppText
                                                        bold                                                            
                                                        title={el.position}
                                                        size="s"
                                                    />

                                                    <AppText
                                                        size="s"
                                                        text={el.achievements}
                                                    />
                                                </div>
                                            </div>
                                        </div>               
                                    </>
                                )
                            })
                        }
                       </div>  
                        
                        <div className={s.keySkills}>
                            
                            <AppText
                                title={"Ключевые навыки"}
                                size="s"
                                bold
                            />
                           
                           <List
                                list={resume.skills}
                                renderItem={(el) =>
                                    <li key={el} className={s.keySkillsTextAll}>
                                        <div >
                                            <AppText
                                                text={el}
                                                size="s"
                                                className={s.keySkillsText}
                                            />    
                                        </div>
                                    </li>
                                }
                            /> 
                        </div>
                        <div className={s.aboutUser}>
                            <div className={s.aboutUserTitle}>
                                <AppText 
                                bold 
                                title={"Обо мне"} 
                                size="s" 

                            />
                            </div>
                            
                            <div className={s.aboutUserTextAll}>
                                <AppText
                                    text={resume.about_me}
                                    size="s"
                                    className={s.aboutUserText}
                                />
                            </div>
                        </div>
                           
                        <div className={s.education}>
                            <AppText
                                bold
                                title={resume.education}
                                size="s"
                            />
                             
                            {
                                resume.educational_institute.map((el) => {
                                    let yearsEducationEnd = new Date(el.graduation_year);
                                    let yearsEducationStart = new Date(el.start_year);
                                    
                                    let yearsEducationExit = yearsEducationEnd.getFullYear();
                                    let yearsEducationBegin = yearsEducationStart.getFullYear();
                                    return (
                                        <div className={s.educationPeriods}>
                                            <div className={s.userEducationPeriod}>
                                                <AppText
                                                    text={yearsEducationBegin + " - " + yearsEducationExit}
                                                    size="s"
                                                />
                                            </div>
                                            <div className={s.descriptionEducation}>
                                                <AppText
                                                    size="s"
                                                    text={el.title}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className={s.workConditions}>
                            <AppText
                                title={"Гражданство, время пути до работы"}
                                size="s"
                                bold
                            />
                            <AppText 
                                text={"Гражданство: ".concat(resume.citizenship)} 
                                size="s" 
                            />
                                
                            <AppText
                                text={"Разрешение на работу: ".concat(resume.work_permit)}
                                size="s"
                            />
{/* не знаю откуда тянуть эту информацию */}                                
                            {/* <AppText
                                text={"Желательное время в пути до работы".concat(": не имеет значения")}
                                size="s"
                                variant={"error"}
                            /> */}
                        </div>
                    </main> 
                </container>
            </AppPage>
        </>
    );
}

//ResumePage.propTypes = {}

export default ResumePage;

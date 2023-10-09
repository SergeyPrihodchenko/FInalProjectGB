import React from "react";
//import PropTypes from 'prop-types'
import s from "./UserSpeciality.module.css";
import AppText from "@/8Shared/ui/AppText/AppText";
import List from "@/8Shared/List/List";
import { useSelector } from "react-redux";



function UserSpeciality() {
    const {resumes} = useSelector(state => state.resumePage);
         
    return (
        <div className={s.userSpeciality}>
            <AppText title={resumes.profession} size="s" bold />
            <div className={s.specialization}>
                <AppText text={"Специализации:"} size="s" />
                <List
                    list={resumes.educational_institute}
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
                text={"Занятость: ".concat(resumes.employment_type) } 
                size="s" 
            />

            <AppText 
                text={"График работы: ".concat(resumes.schedule_type)} 
                size="s" 
            />   
        </div>                    
    );
}

//UserSpeciality.propTypes = {}

export default UserSpeciality;

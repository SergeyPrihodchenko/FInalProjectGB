import React from "react";
//import PropTypes from 'prop-types'
import s from "./KeyUserSkills.module.css";

import AppText from "@/8Shared/ui/AppText/AppText";
import List from "@/8Shared/List/List";
import { useSelector } from "react-redux";




function KeyUserSkills() {
    
    const {resumes} = useSelector(state => state.resumePage);
    //console.log(authores);
    
   return (
        <div className={s.keySkills}>
            <AppText
                title={"Ключевые навыки"}
                size="s"
                bold
            />            
            <List
                list={resumes.skills}
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
                        
    );
}

//KeyUserSkills.propTypes = {}

export default KeyUserSkills;

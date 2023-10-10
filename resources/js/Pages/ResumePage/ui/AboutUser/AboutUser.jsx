import React from "react";
//import PropTypes from 'prop-types'
import s from "./AboutUser.module.css";

import AppText from "@/8Shared/ui/AppText/AppText";
import { useSelector } from "react-redux";

function AboutUser() {
    
    const {resumes} = useSelector(state => state.resumePage);
    
    return (
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
                    text={resumes.about_me}
                    size="s"
                    className={s.aboutUserText}
                />
            </div>
        </div>
                           
                        
    );
}

//AboutUser.propTypes = {}

export default AboutUser;

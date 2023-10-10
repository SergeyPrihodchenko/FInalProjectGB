import React from "react";
//import PropTypes from 'prop-types'

import AppText from "@/8Shared/ui/AppText/AppText";
import { useSelector } from "react-redux";

function UserWorkConditions() {
    
    const {resumes} = useSelector(state => state.resumePage);

    return (
        <div>
            <AppText
                title={"Гражданство, время пути до работы"}
                size="s"
                bold
            />
            <AppText 
                text={"Гражданство: ".concat(resumes.citizenship)} 
                size="s" 
            />
                                
             <AppText
                text={"Разрешение на работу: ".concat(resumes.work_permit)}
                size="s"
            />
{/* не знаю откуда тянуть эту информацию */}                                
            {/* <AppText
                text={"Желательное время в пути до работы".concat(": не имеет значения")}
                size="s"
                variant={"error"}
            /> */}
        </div>                
    );
}

//UserWorkConditions.propTypes = {}

export default UserWorkConditions;

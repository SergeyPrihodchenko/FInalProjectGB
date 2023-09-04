import React from 'react';
//import PropTypes from 'prop-types'
import s from './BtnDeleteProfilePage.module.css';


export const BtnDelete = () => {
    return (
     
            <div className={s.btnProfilePage}>
                <button className={s.btnDeleteProfile} type="submit">Удаление аккаунта</button>
            </div>
        
    )
}
//export default btnDeleteProfile;
//BtnDelete.propTypes = {}

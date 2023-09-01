import s from './AppPage.module.css';
import PropTypes from 'prop-types';

export const AppPage = ({ children }) => {
    return (
        <section className={s.appPage}>
            {children}
        </section>
    )
}

AppPage.propTypes = {
    children: PropTypes.element.isRequired,
}
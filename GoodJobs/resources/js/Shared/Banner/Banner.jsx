import { AppPage } from '../AppPage/AppPage';
import { Typography } from '../Typography/Typography';
import s from './Banner.module.css';
import cn from 'classnames';


export const Banner = ({ imageUrl, children }) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }
    return (
        <div className={cn(s.banner)} style={styles}>
            <AppPage>
                <div className={s.bannercontent}>

                    {children}
                </div>
            </AppPage>


        </div>
    );
}
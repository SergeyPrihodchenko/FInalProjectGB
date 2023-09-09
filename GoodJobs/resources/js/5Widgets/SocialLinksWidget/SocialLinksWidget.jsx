import s from './SocialLinksWidget.module.css';
import cn from 'classnames';

export const SocialLinksWidget = ({ list, className }) => {
    return (
        <ul className={cn(s.socialList, className)}>
            {list.map(item => <li key={item.name}>
                <a href={item.url} title={item.name} target="_blank" >{item.icon}</a>
            </li>)}

        </ul>
    )
}
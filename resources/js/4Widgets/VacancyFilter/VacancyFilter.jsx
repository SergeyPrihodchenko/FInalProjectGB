import AppText from "@/8Shared/ui/AppText/AppText";
import s from "./VacancyFilter.module.css"
import cn from "classnames"
import Checkbox from "@/8Shared/Checkbox/Checkbox";
import RadioButton from "@/8Shared/RadioButton/RadioButton";


export const VacancyFilter = (props) => {
    const {
        experience,
        employment,
        schedule,
        className,
        handleChange
    } = props;
    return (
        <div className={cn(s.filterContainer, className)}>
            <form action="">
                <AppText
                    text="Тип занятости"
                    bold
                    className={s.vacancyFilterTitle}
                />
                {employment.map((item) =>
                    <Checkbox
                        name={'employment'}
                        key={item}
                        label={item}
                        value={item}
                        onChange={handleChange}

                    />)}
                <AppText text="Опыт работы" bold className={s.vacancyFilterTitle} />
                {experience.map((item) =>
                    <RadioButton
                        key={item}
                        name={'experience'}
                        value={item}
                        label={item}
                        onChange={handleChange}
                    />)
                }

                <AppText
                    text="График работы"
                    bold
                    className={s.vacancyFilterTitle}
                />
                {schedule.map((item) =>
                    <Checkbox
                        name={'schedule'}
                        key={item}
                        label={item}
                        value={item}
                        onChange={handleChange}
                    />
                )}
            </form>
        </div>
    )
}
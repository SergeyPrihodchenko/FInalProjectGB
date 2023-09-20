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
    console.log(employment);
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
                <RadioButton
                    name={'experience'}
                    value={experience[0]}
                    label={'Нет опыта'}
                    onChange={handleChange}
                />
                <RadioButton
                    name={'experience'}
                    value={experience[1]}
                    label={'от 1 года до 3 лет'}
                    onChange={handleChange}
                />
                <RadioButton
                    name={'experience'}
                    value={experience[2]}
                    label={'от 3 до 6 лет'}
                    onChange={handleChange}
                />
                <RadioButton
                    name={'experience'}
                    value={experience[3]}
                    label={'более 6 лет'}
                    onChange={handleChange}
                />
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
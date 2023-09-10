import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import s from './Search.module.css';
import TextInput from "@/Components/TextInput"
import cn from 'classnames';
import AppButton from '../ui/AppButton/AppButton';

export const Search = ({ placeholder, vacancies }) => {
    const [param, setParam] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 0) {
            const filterSuggestions = vacancies.filter(
                (suggestion) => {
                    return (suggestion.title.toLowerCase().indexOf(query) > -1 && suggestion.title.toLowerCase().startsWith(query[0])
                    )
                }
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
            console.log(value);
        } else {
            setSuggestionsActive(false);
        }
    };
    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
    }


    const handleKeyDown = (e) => {
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1);
        }
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            }
            setSuggestionIndex(suggestionIndex + 1);
        }
        else if (e.keyCode === 13) {
            setValue(suggestions[suggestionIndex].title);
            setParam(suggestions[suggestionIndex].id);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
        }
    };

    const Suggestions = () => {
        return (
            <ul className={s.suggestions}>
                {suggestions.map((suggestion, index) => {
                    return (
                        <li
                            className={cn(s.suggestionItem, {
                                [s.active]: index === suggestionIndex,
                            })}
                            key={index}
                            onClick={handleClick}
                        >
                            {suggestion.title}
                        </li>
                    );
                })}
            </ul>
        );
    };
    return (
        <div className={s.searchBlock}>
            <form method='GET' action={route('category.sort')} className='w-full flex gap-4'>
                <InputLabel className='w-full'>
                    <TextInput
                        autoComplete='off'
                        name={'vacancy'}
                        value={value}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </InputLabel>
                <AppButton className={s.searchBtn}>
                    Найти
                </AppButton>

            </form>
            {suggestionsActive && <Suggestions />}
        </div>
    )
}
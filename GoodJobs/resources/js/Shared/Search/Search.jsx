import { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import s from './Search.module.css';
import TextInput from "@/Components/TextInput"
import PrimaryButton from '@/Components/PrimaryButton';
import cn from 'classnames';

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
                (suggestion) => { return (suggestion.title.toLowerCase().indexOf(query) > -1 && suggestion.title.toLowerCase().startsWith(query[0])) }
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
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
            <form method='' action={route('vacancy.show', `${param}`)} className='w-full flex'>
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

                <PrimaryButton className="ml-4" >
                    Найти
                </PrimaryButton>

            </form>
            {suggestionsActive && <Suggestions />}
        </div>
    )
}
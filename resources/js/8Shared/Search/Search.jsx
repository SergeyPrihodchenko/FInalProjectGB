import { useEffect, useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import s from './Search.module.css';
import TextInput from "@/Components/TextInput"
import cn from 'classnames';
import AppButton from '../ui/AppButton/AppButton';
import axios from 'axios';
import useDebounce from './useDebounce';

export const Search = ({ placeholder, vacancies }) => {
    const [param, setParam] = useState('');
    const [suggestions, setSuggestions] = useState([]); //список предложенных вакансий
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false); // показать список
    const [value, setValue] = useState(""); // состояние инпута

    const [sortVacancies, SetSortVacancy] = useState([]);

    const debouncedVac = useDebounce(value, 500);
    console.log(debouncedVac);

    useEffect(() => {
        if (!debouncedVac || debouncedVac.length <= 2) return;

        axios.get(`/searchSort?str=${debouncedVac}`)
            .then((res) => {
                // SetSortVacancy(res.data);
                setSuggestions(res.data);
                console.log(res.data);

            })
            .catch((err) => console.log(err))
    }, [debouncedVac]);

    // const request = (str) => {
    //     if (str.length >= 3) {
    //         axios.get(`/searchSort?str=${str}`)
    //             .then(res => {
    //                 console.log(res.data);
    //                 SetSortVacancy(res.data);
    //             })
    //             .catch((err) => console.log(err))
    //     }
    // }

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        // request(query);

        setValue(query);






        // if (query.length > 0) {
        // const filterSuggestions = sortVacancies.filter(
        //     (suggestion) => {
        //         return (suggestion.title.toLowerCase().indexOf(query) > -1 && suggestion.title.toLowerCase().startsWith(query[0])
        //         )
        //     }
        // );
        // console.log(filterSuggestions);
        // setSuggestions([...suggestions, ...sortVacancies]);
        // setSuggestionsActive(true);
        // console.log(query);
        // } else {
        // setSuggestionsActive(false);
        // }
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
                        onClick={() => setSuggestionsActive(!suggestionsActive)}
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
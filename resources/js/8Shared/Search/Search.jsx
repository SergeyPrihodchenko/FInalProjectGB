import { useEffect, useState } from 'react';
import s from './Search.module.css';
import cn from 'classnames';
import AppButton from '../ui/AppButton/AppButton';
import axios from 'axios';
import useDebounce from './useDebounce';
import AppInput from '../ui/AppInput/AppInput';

export const Search = ({
    placeholder,
    width,
    uri,
    className,
    vacancies,
    method = 'get'
}) => {
    const [param, setParam] = useState('');
    const [suggestions, setSuggestions] = useState([]); //список предложенных вакансий
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false); // показать список
    const [value, setValue] = useState(""); // состояние инпута

    // const [sortVacancies, SetSortVacancy] = useState([]);

    const debouncedVac = useDebounce(value, 500);
    // console.log(debouncedVac);

    useEffect(() => {
        if (!debouncedVac || debouncedVac.length <= 2) return;

        axios.get(`/searchSort?str=${debouncedVac}`)
            .then((res) => {
                setSuggestions(res.data);
                console.log(res.data);

            })
            .catch((err) => console.log(err))
    }, [debouncedVac]);

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
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
    const handleSuggestionsActive = () => {
        setSuggestionsActive(!suggestionsActive)
    }

    const Suggestions = ({ width }) => {
        return (
            <ul
                style={{ width: width }}
                className={cn(s.suggestions)}
            >
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
            <form
                method={method}
                action={route('category.sort')}
                className={cn(s.searchForm)}>
                <AppInput
                    autoComplete='off'
                    name={'vacancy'}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onClick={handleSuggestionsActive}
                    width={width}
                    isFocused
                />
                <AppButton className={s.searchBtn}>
                    Найти
                </AppButton>

            </form>
            {suggestionsActive && <Suggestions width={width} />}
        </div>
    )
}
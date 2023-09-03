import InputLabel from '@/Components/InputLabel';
import s from './Search.module.css';
import TextInput from "@/Components/TextInput"
import PrimaryButton from '@/Components/PrimaryButton';
import { createRef, useRef, useState } from 'react';



export const Search = ({ placeholder, type = 'search', data }) => {
    const [enteredWord, setEnteredWord] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const inputRef = createRef();
    const resultsBlock = useRef(null);

    const handleInputSearch = () => {
        console.log(resultsBlock.current.textContent);
    }

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setEnteredWord(searchWord);

        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }
    return (
        <div className={s.searchBlock}>
            <form method='' action={route('main')} className='w-full flex'>
                <InputLabel className='w-full'>
                    <TextInput
                        type={type}
                        name={'vacancy'}
                        onChange={handleFilter}
                        placeholder={placeholder}
                        value={enteredWord}
                        ref={inputRef}

                    />
                </InputLabel>

                <PrimaryButton className="ml-4" >
                    Найти
                </PrimaryButton>

            </form>
            <div className={s.searchResults} ref={resultsBlock} >
                {filteredData.slice(0, 15).map((value, index) =>
                    <div className={s.searchResultsItem} key={index} onClick={handleInputSearch}>{value.name}</div>
                )}
            </div>

        </div>
    )
}
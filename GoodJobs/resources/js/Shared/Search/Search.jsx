import InputLabel from '@/Components/InputLabel';
import s from './Search.module.css';
import TextInput from "@/Components/TextInput"
import PrimaryButton from '@/Components/PrimaryButton';



export const Search = ({ placeholder }) => {

    return (
        <form action='' className='w-full flex'>
            <InputLabel className='w-full'>
                <TextInput
                    name={'vacancy'}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder={placeholder} />
            </InputLabel>
            <PrimaryButton className="ml-4">
                Найти
            </PrimaryButton>

        </form>
    )
}
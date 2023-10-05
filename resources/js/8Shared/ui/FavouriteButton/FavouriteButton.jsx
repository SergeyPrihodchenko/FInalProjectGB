import cn from "classnames"
import s from "./FavouriteButton.module.css"
import AppButton from "@/8Shared/ui/AppButton/AppButton"
import { BootstrapIcon } from "@/8Shared/Icon/BootstrapIcon";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFavouritesList } from "@/Pages/VacancyListPage/model/slice/VacancyListPageSlice";


const FavouriteButton = ({
    favourites,
    id,
    user,
    className,
    ...rest
}) => {
    const [favouritesList, setFavouritesList] = useState(favourites);
    // const dispatch = useDispatch();
    // const { favouritesList } = useSelector(state => state.vacancyListPage);
    // console.log('favbtn', favouritesList);

    const toggleFavourites = async (id) => {
        if (!favouritesList.length) {
            setFavouritesList([...favouritesList, id]);
            // dispatch(setFavouritesList([...favouritesList, id]));

            await axios.post('/addLike', { like: { user_id: user.id, vacancy_id: id } });
        } else {
            if (favouritesList.includes(id)) {
                setFavouritesList(favouritesList.filter((favourite) => favourite !== id));
                await axios.post('/deleteLike', { id: { vacancy_id: id } });

            } else {
                setFavouritesList([...favouritesList, id]);
                await axios.post('/addLike', {
                    like: {
                        user_id: user.id,
                        vacancy_id: id
                    }
                });

            }
        }
    }
    const isInFavourite = (id, list) => {
        return list.some(el => el === id)
    }
    return (
        <AppButton
            onClick={() => toggleFavourites(id)}
            className={cn(s.favBtn, className)}
            variant={'clear'}
            {...rest}
        >
            {isInFavourite(id, favouritesList) ?
                <BootstrapIcon name={'BsHeartFill'} size={28} color={'tomato'} />
                :
                <BootstrapIcon name={'BsHeart'} size={28} />
            }

        </AppButton>
    )
}

export default FavouriteButton;
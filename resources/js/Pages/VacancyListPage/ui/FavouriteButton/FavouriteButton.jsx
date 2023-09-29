import cn from "classnames"
import s from "./FavouriteButton.module.css"
import AppButton from "@/8Shared/ui/AppButton/AppButton"


const FavouriteButton = ({
    favourites,
    id,
    ...rest
}) => {
    const [favouritesList, setFavouritesList] = useState(favourites);
    const toggleFavourites = async (id) => {
        // if (!favouritesList.length) {
        //     setFavouritesList([...favouritesList, id]);
        //     await axios.post('/addLike', { like: { user_id: user.id, vacancy_id: id } });
        // } else {
        //     if (favouritesList.includes(id)) {
        //         setFavouritesList(favouritesList.filter((favourite) => favourite !== id))
        //         await axios.post('/deleteLike', { id: { vacancy_id: id } });

        //     } else {
        //         setFavouritesList([...favouritesList, id]);
        //         await axios.post('/addLike', { like: { user_id: user.id, vacancy_id: id } });

        //     }
        // }
    }
    return (
        <AppButton onClick={() => toggleFavourites(id)}>

        </AppButton>
    )
}

import { List } from "./FavoriteList.styled";
import { Camper } from "../Camper/Camper";

export const FavoriteList = ({favorites}) => {
    return (
        <List>
{favorites.map(favorite => <Camper value = {favorite} key = {favorite._id}/>)}
</List>
    )

}
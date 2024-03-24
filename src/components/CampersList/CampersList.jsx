import {selectCampers} from "../../redux/selectors";
import { useSelector } from "react-redux";
import {Camper} from "../Camper/Camper";
import { List } from "./CamperList.styled";

export const CampersList = () => {
    const campers = useSelector(selectCampers);
    return (
        <List>
{campers.map(camper => <Camper value = {camper} key = {camper._id}/>)}
</List>
    )

}
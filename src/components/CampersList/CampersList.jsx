import { useDispatch, useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import { selectCamperItems } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { fetchCamper } from "../../redux/Catalog/operationsCatalog";

export default function CampersList() {
    const dispatch = useDispatch();
    const campers = useSelector(selectCamperItems)

    useEffect(() => { 
            dispatch(fetchCamper());
    }, [dispatch]);  
    return(
        <>
            <ul>
                {campers.map(camper =>(
                    <li key={camper.id}>
                    <Camper camper={camper}/>
                    </li>
            ))}
            </ul>
            <button>Load more</button>
        </>
    )
}
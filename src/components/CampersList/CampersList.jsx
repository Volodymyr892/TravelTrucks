import { useDispatch, useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import { selectCamperItems } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { fetchCamper } from "../../redux/Catalog/operationsCatalog";
import css from "./CampersList.module.css"

export default function CampersList({filter}) {
    const dispatch = useDispatch();
    const campers = useSelector(selectCamperItems)

    useEffect(() => { 
            dispatch(fetchCamper(filter || {}));
    }, [dispatch, filter]);  
    return(
        <div>
            <ul>
                {campers.map(camper =>(
                    <li className={css.list} key={camper.id}>
                    <Camper camper={camper}/>
                    </li>
            ))}
            </ul>
            <button>Load more</button>
        </div>
    )
}
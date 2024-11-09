import { useDispatch, useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import { selectCamperItems } from "../../redux/Catalog/selectors";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/Catalog/operationsCatalog";
import css from "./CampersList.module.css"
import {LoaderBtn} from "../Loader/Loader";

export default function CampersList({filter}) {
    const dispatch = useDispatch();
    const campers = useSelector(selectCamperItems)
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setVisibleCount(4);
        dispatch(fetchCamper({ ...filter, limit: 4 })); 
    }, [dispatch, filter]); 
    
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            //*додавання кемерів по 4 шт і в кінці те що залишилось 
            const remainingCampers = campers.length - visibleCount;
            const loadMoreCount = remainingCampers >= 4 ? 4 : remainingCampers;
            setVisibleCount((prevCount) => prevCount + loadMoreCount);
            setLoading(false); 
        }, 2000); 
    };
    return(
        <div >
                <ul>
                    {campers.slice(0, visibleCount).map(camper =>(
                        <li className={css.list} key={camper.id}>
                        <Camper camper={camper}/>
                        </li>
                ))}
                </ul>
                { loading ? (<LoaderBtn/>) :(campers.length > visibleCount && 
               <div className={css.buttonContainer}>
                    <button onClick={handleLoadMore} className={css.button }>Load more
                    </button>
               </div>)}
        </div>
    )
}
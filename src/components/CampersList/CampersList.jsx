import { useDispatch, useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import { selectCamperItems } from "../../redux/Catalog/selectors";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/Catalog/operationsCatalog";
import css from "./CampersList.module.css"

export default function CampersList({filter}) {
    const dispatch = useDispatch();
    const campers = useSelector(selectCamperItems)
    const [visibleCount, setVisibleCount] = useState(4);

    // useEffect(() => { 
    //         dispatch(fetchCamper(filter || {}));
    // }, [dispatch, filter]);  
    // useEffect(() => {
    //     dispatch(fetchCamper({ ...filter, limit: visibleCount })); // Затягуючи камперів в залежності від visibleCount
    // }, [dispatch, filter, visibleCount]);
    useEffect(() => {
        // Скидаємо кількість елементів на 4 при зміні фільтра
        setVisibleCount(4);
        dispatch(fetchCamper({ ...filter, limit: 4 })); // Завантажуємо перші 4 кампера з новим фільтром
    }, [dispatch, filter]); // Цей effect спрацьовує при зміні фільтра


    // Функція для завантаження наступних 4 камперів
    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Збільшуємо на 4
    };
    return(
        <div>
            <ul>
                {campers.slice(0, visibleCount).map(camper =>(
                    <li className={css.list} key={camper.id}>
                    <Camper camper={camper}/>
                    </li>
            ))}
            </ul>
            <button onClick={handleLoadMore} className={css.button }>Load more</button>
        </div>
    )
}
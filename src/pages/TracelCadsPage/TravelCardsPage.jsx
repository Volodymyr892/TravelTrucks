import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import FilterList from "../../components/FilterList/FilterList";
import css from "./TravelCardsPage.module.css"
import Loader from "../../components/Loader/Loader";


export default function TravelCardsPage() {
    const [filter, isSetFilter] = useState(null);
    const  [loading, setLoading] = useState(true);
    useEffect(() => {
        // Вимикаємо лоадер після того, як компонент змонтується
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Налаштовуємо затримку для імітації завантаження
    }, []);

    const handleSearch = (newFilters)=>{
        setLoading(true); 
        isSetFilter(newFilters);

        setTimeout(() => {
            setLoading(false); // Вимикаємо лоадер після отримання результатів
        }, 2000); 
    }

    return(
    <main className={css.container}>
        <div className={css.travel}>
            <FilterList onSearch={handleSearch}/>
           {loading? <Loader/> :<CampersList filter={filter}/>}
        </div>
    </main>
    )
}
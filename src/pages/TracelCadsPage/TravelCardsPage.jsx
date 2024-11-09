import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import FilterList from "../../components/FilterList/FilterList";
import css from "./TravelCardsPage.module.css"
import {Loader} from "../../components/Loader/Loader";


export default function TravelCardsPage() {
    const [filter, isSetFilter] = useState(null);
    const  [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000); 
    }, []);
    const handleSearch = (newFilters)=>{
        setLoading(true); 
        isSetFilter(newFilters);
        setTimeout(() => {
            setLoading(false); 
        }, 3000); 
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
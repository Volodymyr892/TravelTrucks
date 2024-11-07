import { useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import FilterList from "../../components/FilterList/FilterList";
import css from "./TravelCardsPage.module.css"


export default function TravelCardsPage() {
    const [filter, isSetFilter] = useState(null);

    const handleSearch = (newFilters)=>{
        isSetFilter(newFilters);
    }

    return(
    <main className={css.container}>
        <div className={css.travel}>
            <FilterList onSearch={handleSearch}/>
            <CampersList filter={filter}/>
        </div>
    </main>
    )
}
import { useEffect, useState } from "react"
import Location from "../Location/Location"
import TypeVehicle from "../TypeVehicle/TypeVehicle"
import VehicleAuto from "../VehicleAuto/VehicleAuto"
import css from "./FilterList.module.css"

export default function FilterList({onSearch}) {
    const [islocation, isSetLocation] = useState(localStorage.getItem("location") || "");
    const [isVehicle, isSetVehicle] = useState(JSON.parse(localStorage.getItem("vehicle") || "[]"));
    const [isType, isSetType] = useState(localStorage.getItem("type") || "");
    
    //* Перевіряє чи є активні фільтри
    useEffect(() => {
        const hasFilters = islocation || isVehicle.length > 0 || isType.length > 0;
        if (hasFilters) {
            const savedFilters = {
                location: islocation,
                form: isType ? [isType] : [],
                ...isVehicle.reduce((acc, item) => ({ ...acc, [item]: true }), {}),
            };
            onSearch(savedFilters);
        } else {
            onSearch({}); 
        }
    }, [])
    //* збереження стану фільтрів після завантаження 
    useEffect(() => {
        localStorage.setItem("location", islocation);
        localStorage.setItem("vehicle", JSON.stringify(isVehicle));
        localStorage.setItem("type", isType); 
    }, [islocation, isVehicle, isType]);

    //* Oтримує нове значення з Location
    const handleLocationChange = e => isSetLocation(e.target.value);
    
    //* Отримує нове значення з Vehicle Filters
    const handleVehicleChange = e =>{
        const {value, checked}= e.target;
        isSetVehicle(prev => 
            checked ? [...prev, value] : prev.filter(item => item !== value)
        )
    }
    //* Отримує нове значення з Type Filers
    const handleTypeChange = e => {
        isSetType(e.target.value); 
    }
    
    //* Надислає дані для фільтрації 
    const handleSearch = ()=>{
        const hasFilters = islocation || isVehicle.length > 0 || isType.length > 0;
        const filters = hasFilters ? {
            location: islocation,
            form: isType,
            transmission: isVehicle.includes("transmission") ? "automatic" : undefined,
            ...isVehicle.reduce((acc, item) => {
                if (item !== "transmission") {
                    acc[item] = true;
                }
                return acc;
            }, {})
        }: {};
        onSearch(filters);
    }
    return(
    <div>
    <ul>
        <li>
            <Location onChange={handleLocationChange} selectedValues={islocation}/>
        </li>
        <li>
            <p className={css.filter}>Filters</p>
        </li>
        <li>
            <VehicleAuto onChange={handleVehicleChange} selectedValues={isVehicle}/>
        </li>
        <li>
            <TypeVehicle onChange={handleTypeChange} selectedValues={isType}/>
        </li>
    </ul>
    <button className={css.button} type="submit" onClick={handleSearch}>Search</button>
    </div>
    )
}
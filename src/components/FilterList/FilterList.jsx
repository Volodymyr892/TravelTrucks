import { useState } from "react"
import Location from "../Location/Location"
import TypeVehicle from "../TypeVehicle/TypeVehicle"
import VehicleAuto from "../VehicleAuto/VehicleAuto"
export default function FilterList() {
    const [islocation, isSetLocation] = useState("");
    const [isVehicle, isSetVehicle] = useState([]);
    const [isType, isSetType] = useState([])

    //фільтрація по локації 
    const handleLocationChange = e => isSetLocation(e.target.value);
    // фільтрація по характеристикам
    const handleVehicleChange = e =>{
        const {value, checked}= e.target;
        isSetVehicle(prev => 
            checked ? [...prev, value] : prev.filter(item => item !== value)
        )
    }

    const handleTypeChange = e =>{
        const {value, checked}= e.target;
        isSetType(
            prev => 
                checked ? [...prev, value] : prev.filter(item => item !== value) 
        )
    }
    return(
    <>
    <ul>
        <li>
            <Location onChange={handleLocationChange}/>
        </li>
        <li>
            <VehicleAuto onChange={handleVehicleChange}/>
        </li>
        <li>
            <TypeVehicle onChange={handleTypeChange}/>
        </li>
    </ul>
    <button>Search</button>
    </>
    )
}
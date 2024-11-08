import van from "../../assets/van.svg"
import full from "../../assets/full.svg"
import alcove from "../../assets/alcove.svg"
import css from "./TypeVehice.module.css"
import { useState } from "react"
export default function TypeVehicle({onChange, selectedValues}) {
    const [checkedItem, setCheckedItems] = useState(selectedValues || [])
    const typeOptions = [
        { value: 'panelTruck', label: 'Van', icon: van },
        { value: 'fullyIntegrated', label: 'Fully Integrated', icon: full },
        { value: 'alcove', label: 'Alcove', icon: alcove},
      ];

      
      const handleRadioChange = (e) => {
        const { value } = e.target;
        setCheckedItems(value);
        onChange({ target: { value, checked: true } }); 
    };

    return(
    <div className={css.container}>
    <h2 className={css.title}>Vehicle type</h2>
    <hr className={css.line}/>
    <ul className={css.list}>
        {typeOptions.map(type=> (
            <li className={css.item} key={type.value}>
            <label className={`${css.label} ${checkedItem === type.value ? css.checked : ""}`}>
                <input 
                type="radio"
                value={type.value}
                onChange={handleRadioChange}
                checked={checkedItem === type.value}
                className={css.input}
                />
                <img className={css.img} src={type.icon} alt="q" />
                <p className={css.ac}>{type.label}</p>
            </label>
        </li>))}
    </ul>
    </div>
    )
}
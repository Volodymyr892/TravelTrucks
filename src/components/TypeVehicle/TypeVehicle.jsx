import van from "../../assets/van.svg"
import full from "../../assets/full.svg"
import alcove from "../../assets/alcove.svg"
import css from "./TypeVehice.module.css"
import { useState } from "react"
export default function TypeVehicle({onChange, selectedValues}) {
    const [checkedItems, setCheckedItems] = useState(new Set(selectedValues))
    const typeOptions = [
        { value: 'panelTruck', label: 'Van', icon: van },
        { value: 'fullyIntegrated', label: 'Fully Integrated', icon: full },
        { value: 'alcove', label: 'Alcove', icon: alcove},
      ];
      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
    
        const newCheckedItems = new Set(checkedItems);
        if (checked) {
          newCheckedItems.add(value);
        } else {
          newCheckedItems.delete(value);
        }
    
        setCheckedItems(newCheckedItems);
        onChange(e); 
      };
    return(
    <div className={css.container}>
    <h2 className={css.title}>Vehicle type</h2>
    <hr className={css.line}/>
    <ul className={css.list}>
        {typeOptions.map(type=> (
            <li className={css.item} key={type.value}>
            <label  className={`${css.label} ${
                checkedItems.has(type.value) ? css.checked : ""
              }`}>
                <input 
                type="checkbox"
                value={type.value}
                onChange={handleCheckboxChange}
                checked={checkedItems.has(type.value)}
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
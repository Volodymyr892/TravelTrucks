import van from "../../assets/van.svg"
import full from "../../assets/full.svg"
import alcove from "../../assets/alcove.svg"
export default function TypeVehicle({onChange}) {
    const typeOptions = [
        { value: 'panelTruck', label: 'Van', icon: van },
        { value: 'fullyIntegrated', label: 'Fully Integrated', icon: full },
        { value: 'alcove', label: 'Alcove', icon: alcove},
      ];
    return(
   <>
    <h2>Vehicle type</h2>
    <hr/>
    <ul>
        {typeOptions.map(type=> (
            <li key={type.value}>
            <label>
                <input 
                type="checkbox"
                value={type.value}
                onChange={onChange}
                />
               <img src={type.icon} alt="q" />
               <p>{type.label}</p>
            </label>
        </li>))}
    </ul>
   </>
    )
}
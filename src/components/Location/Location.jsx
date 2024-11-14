import css from "./Location.module.css"
import location from "../../assets/location.svg"

export default function Location({onChange, selectedValues}) {
    
    return(
        <div className={css.container}>
            <p className={css.title}>Location</p>
            <label>
                <div className={css.locationContainer}>
                    <img src={location} alt="Location Icon" className={css.locationIcon} />
                    <input 
                    type="text" 
                    onChange={onChange}
                    value={selectedValues}
                    placeholder="City"
                    className={css.locationInput}
                    />
                </div>
            </label>
        </div>
    )
}
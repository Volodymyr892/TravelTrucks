import location from "../../assets/location.svg"

export default function Location({onChange}) {
    return(
        <>
            <p>Location</p>
            <label>
               <div>
                    <img src={location} alt="Location Icon"  />
                    <input type="text" onChange={onChange}/>
               </div>
            </label>
        </>
    )
}
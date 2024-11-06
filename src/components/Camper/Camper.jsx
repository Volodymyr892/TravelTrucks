import { useEffect, useState } from "react"
import heart from "../../assets/heart.svg"
import heartRed from "../../assets/hertRed.svg"
import css from "./Camper.module.css"

export default function Camper({camper}) {
    const [isAdd, setIsAdd] = useState(false);

    useEffect(()=>{
        const added = JSON.parse(localStorage.getItem('added')) || [];
        setIsAdd(added.includes(camper.id));
    },[camper.id])

    const toggleAdd = ()=>{
        let added = JSON.parse(localStorage.getItem('added')) || [];
        if (isAdd) {
            added = added.filter((id) => id !== camper.id); 
        } else {

            added.push(camper.id);
        }

        localStorage.setItem("added", JSON.stringify(added));

        setIsAdd(!isAdd);
    }
    const firstImage =  camper.gallery[0] ? camper.gallery[0].thumb : null;

    return(
        <div>
            <img src={firstImage} alt="qwerty" />
            <div>
                <div>
                    <ul>
                        <li>{camper.name}</li>
                        <li>{camper.price}.00</li>
                        <li>
                            <button 
                            className={css.buttonHeart}
                            onClick={toggleAdd}
                            >
                                <img src={isAdd ? heartRed : heart} alt="heart" />
                            </button>
                        </li>
                    </ul>
                    <ul>
                        <li> {camper.rating} ({camper.reviews.length} Reviews)</li>
                        <li>Kyiv, Ukraine</li>
                    </ul>
                </div>
                <p>{camper.description.length > 64 ? camper.description.slice(0, 63) + "..." : camper.description}</p>
                <ul>
                    <li>{camper.transmission}</li>
                    <li>{camper.engine}</li>
                    {camper.kitchen && <li>Kitchen</li>}
                    {camper.AC && <li>AC</li>}
                </ul>
                <button type="submit">Show more</button>
            </div>
        </div>
    )
}
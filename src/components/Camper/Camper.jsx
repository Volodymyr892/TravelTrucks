import { useEffect, useState } from "react"
import heart from "../../assets/heart.svg"
import heartRed from "../../assets/hertRed.svg"
import location from "../../assets/location.svg"
import star from "../../assets/star.svg"
import css from "./Camper.module.css"
import automatic from "../../assets/automatic.svg"
import pump from "../../assets/fuel-pump.svg"
import kitchen from "../../assets/kitchen.svg"
import ac from "../../assets/ac.svg"

export default function Camper({camper}) {
    const [isAdd, setIsAdd] = useState(false);

    const handleShowMore = () => {
        window.open(`/catalog/${camper.id}`, '_blank');
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

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
    const description = camper.description.length > 64 ? camper.description.slice(0, 63) + "..." : camper.description

    return(
        <div className={css.camper}>
            <img className={css.img} src={firstImage} alt="qwerty" />
            <div>
                <div>
                    <ul className={css.title}>
                        <h2 className={css.name}>{camper.name}</h2>
                        <div className={css.prise}>
                            <li className={css.priceNumber}>€{camper.price.toFixed(2)}</li>
                            <li>
                                <button 
                                className={css.buttonHeart}
                                onClick={toggleAdd}
                                >
                                    <img src={isAdd ? heartRed : heart} alt="heart" />
                                </button>
                            </li>
                        </div>
                    </ul>
                    <ul className={css.ratingLocation}>
                        <li className={css.reviews}>
                            <img className={css.locRev} src={star} alt="star" />
                            {camper.rating} ({camper.reviews.length}) Reviews 
                        </li>
                        <li  className={css.reviews}>
                            <img className={css.locImg} src={location} alt="location" />
                            {camper.location}
                        </li>
                    </ul>
                </div>
                <p className={css.description}>{description}</p>
                <ul className={css.characters}>
                     <li className={css.charact}>
                       <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={automatic} alt="" />
                            <p className={css.namecharacter}>{capitalizeFirstLetter(camper.transmission)}</p>
                       </div>
                    </li>
                    <li className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={pump} alt="" />
                            <p className={css.namecharacter}>{capitalizeFirstLetter(camper.engine)}</p>
                        </div>
                    </li>
                    {camper.kitchen && <li  className={css.charact}>
                       <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={kitchen} alt="" />
                            <p className={css.namecharacter}>Kitchen</p>
                       </div>
                    </li>}
                    {camper.AC && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={ac} alt="" />
                            <p className={css.namecharacter}>AC</p>
                        </div>
                        </li>}
                </ul>
                <button className={css.buttonShow} onClick={handleShowMore} type="submit">Show more</button>
            </div>
        </div>
    )
}
import star from "../../assets/star.svg"
import location from "../../assets/location.svg"
import css from "./CamperDetails.module.css"

export default function CamperDetails({camper}) {

    return(
       <ul>
            <li className={css.listOne}>
                <ul className={css.listTitle}>
                    <li className={css.name}>{camper.name}</li>
                    <li>
                    <ul className={css.ratingLocation}>
                        <li className={css.reviews}>
                            <img className={css.locRev} src={star} alt="star" />
                            {camper.rating} Reviews 
                        </li>
                        <li  className={css.reviews}>
                            <img className={css.locImg} src={location} alt="location" />
                            {camper.location}
                        </li>
                    </ul>
                    </li>
                    <li className={css.priceNumber}>€{camper.price}.00</li>
                </ul>
            </li>
            <li className={css.listImage}>
                {Array.isArray(camper.gallery) && camper.gallery.length > 0 && (
                    <ul className={css.gallery}>
                    {camper.gallery.map((trump) => (
                        <li className={css.listImg} key={trump.thumb}>
                            <img className={css.img} src={trump.thumb} alt="" />
                        </li>
                    ))}
                    </ul>
                )}
            </li>
            <li className={css.description}>
                <p className={css.desc}>{camper.description}</p>
            </li>
        </ul>
    )
}
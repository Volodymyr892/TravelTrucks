import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { idCemper } from "../../redux/Catalog/operationsCatalog";
import star from "../../assets/star.svg"
import starGray from "../../assets/ratingStar.svg"
import Form from "../Form/Form";
import css from "./CardReviews.module.css"


export default function CardReviews() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const camper = useSelector(selectSelectedCamper);

    useEffect(()=>{
        dispatch(idCemper(id))
    },[id, dispatch])

    const renderStars = (rating)=>{
        const totalStars = 5;
        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i<rating) {
                stars.push(<img key={i} src={star}/>)
            } else {
                stars.push(<img key={i} src={starGray}/>)
            }
        }
        return stars;
    }
    return(
        <div className={css.position}>
            <div>
            {Array.isArray(camper.gallery) && camper.gallery.length > 0 && (
            <ul className={css.container}>
                { camper.reviews.map((review)=>(
                <li className={css.item} key={review.reviewer_name}>
                    <div className={css.nameStar}>
                        <p className={css.oneB}>{review.reviewer_name.length > 1 ? review.reviewer_name.slice(0, 1) + " " : review.reviewer_name}</p>
                        <div>
                            <h3 className={css.name}>{review.reviewer_name}</h3>
                            <span aria-hidden="true">{renderStars(review.reviewer_rating)}</span>
                        </div>
                    </div>
                    <p className={css.comment}>{review.comment}</p>
                </li>
                ))}
            </ul>
            )}
            </div>
            <div><Form/></div>
        </div>
    )
}
import { NavLink, Outlet, useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CemperDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { idCemper } from "../../redux/Catalog/operationsCatalog";
import Form from "../../components/Form/Form";
import css from "./TravelCardDetailsPage.module.css"

export default function TravelCardDetailsPage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const camper = useSelector(selectSelectedCamper);
    console.log("🚀 ~ TravelCardDetailsPage ~ camper:", camper);

    useEffect(()=>{
        dispatch(idCemper(id))
    },[id, dispatch])
    
    return (
        <div>
        <CamperDetails camper={camper}/>
        <ul className={css.list}>
            <li>
                <NavLink className={css.item} to="features">Features</NavLink>
            </li>
            <li>
                <NavLink className={css.item} to="reviews">Reviews</NavLink>
            </li>
        </ul>
        <hr className={css.line}/>
        <Outlet/>
        <Form/>
    </div>
    )
}
import { NavLink, Outlet, useParams } from "react-router-dom";
import CamperDetails from "../../components/CamperDetails/CemperDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { idCemper } from "../../redux/Catalog/operationsCatalog";
import css from "./TravelCardDetailsPage.module.css"

export default function TravelCardDetailsPage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const camper = useSelector(selectSelectedCamper);

    useEffect(()=>{
        dispatch(idCemper(id))
    },[id, dispatch])
    
    return (
        <div className={css.container}>
        <CamperDetails camper={camper}/>
            <ul className={css.list}>
                <li>
                    <NavLink 
                    className={({ isActive }) => isActive ? `${css.item} ${css.active}` : css.item} 
                    to="features"
                    end
                    >Features</NavLink>
                </li>
                <li>
                    <NavLink 
                    className={({ isActive }) => isActive ? `${css.item} ${css.active}` : css.item} 
                    to="reviews"
                    >Reviews</NavLink>
                </li>
            </ul>
            <hr className={css.line}/>
            <Outlet/>
    </div>
    )
}
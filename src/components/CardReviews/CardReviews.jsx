import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { idCemper } from "../../redux/Catalog/operationsCatalog";

export default function CardReviews() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const camper = useSelector(selectSelectedCamper);

    useEffect(()=>{
        dispatch(idCemper(id))
    },[id, dispatch])
    return(
        <>
         
        </>
    )
}
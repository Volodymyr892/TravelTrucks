import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedCamper } from "../../redux/Catalog/selectors";
import { useEffect } from "react";
import { idCemper } from "../../redux/Catalog/operationsCatalog";
import automatic from "../../assets/automatic.svg"
import pump from "../../assets/fuel-pump.svg"
import kitchen from "../../assets/kitchen.svg"
import ac from "../../assets/ac.svg"
import css from "./CardFeature.module.css"
import radio from "../../assets/radios.svg"
import bathroom from "../../assets/bathroom.svg"
import refrigerator from "../../assets/refrigerator.svg"
import microwave from "../../assets/microwave.svg"
import gas from "../../assets/gas.svg"
import water from "../../assets/water.svg"
import Form from "../Form/Form";

export default function CardFeature() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const camper = useSelector(selectSelectedCamper);

    //* Перетворення першої літери на велику бо з бекенду приходить маленька 
    function capitalizeFirstLetter (string){
        if (!string) return ''; 
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(()=>{
        dispatch(idCemper(id))
    },[id, dispatch])

    return(
        <div className={css.position}>
            <div className={css.container}>
                <ul className={css.characters}>
                        <li className={css.charact}>
                            <div className={css.iconCharacter}>
                                <img className={css.iconCharact} src={automatic} alt="automatic" />
                                <p className={css.namecharacter}>{capitalizeFirstLetter(camper.transmission)}</p>
                            </div>
                        </li>
                        <li className={css.charact}>
                            <div className={css.iconCharacter}>
                                <img className={css.iconCharact} src={pump} alt="pump" />
                                <p className={css.namecharacter}>{capitalizeFirstLetter(camper.engine)}</p>
                            </div>
                        </li>
                        {camper.kitchen && <li  className={css.charact}>
                            <div className={css.iconCharacter}>
                                <img className={css.iconCharact} src={kitchen} alt="kitchen" />
                                <p className={css.namecharacter}>Kitchen</p>
                            </div>
                        </li>}
                        {camper.AC && <li  className={css.charact}>
                            <div className={css.iconCharacter}>
                                <img className={css.iconCharact} src={ac} alt="ac" />
                                <p className={css.namecharacter}>AC</p>
                            </div>
                        </li>}
                        {camper.radio && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={radio} alt="radio" />
                            <p className={css.namecharacter}>Radio</p>
                        </div>
                        </li>}
                        {camper.bathroom && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={bathroom} alt="bathroom" />
                            <p className={css.namecharacter}>Bathroom</p>
                        </div>
                        </li>}
                        {camper.refrigerator && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={refrigerator} alt="refrigerator" />
                            <p className={css.namecharacter}>Refrigerator</p>
                        </div>
                        </li>}
                        {camper.microwave && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={microwave} alt="microwave" />
                            <p className={css.namecharacter}>Microwave</p>
                        </div>
                        </li>}
                        {camper.gas && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={gas} alt="gas" />
                            <p className={css.namecharacter}>Gas</p>
                        </div>
                        </li>}
                        {camper.water && <li  className={css.charact}>
                        <div className={css.iconCharacter}>
                            <img className={css.iconCharact} src={water} alt="water" />
                            <p className={css.namecharacter}>Water</p>
                        </div>
                        </li>}
                    </ul>
                <div>
                    <p className={css.titleVehicle}>Vehicle details</p>
                    <hr className={css.line}/>
                    <ul className={css.list}>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Form</p>
                            <p className={css.detailsTruck}>Panel truck</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Length</p>
                            <p className={css.detailsTruck}>{camper.length}</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Width</p>
                            <p className={css.detailsTruck}>{camper.width}</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Height</p>
                            <p className={css.detailsTruck}>{camper.height}</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Tank</p>
                            <p className={css.detailsTruck}>{camper.tank}</p>
                        </li>
                        <li className={css.item}>
                            <p className={css.detailsForm}>Consumption</p>
                            <p className={css.detailsTruck}>{camper.consumption}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    )
}
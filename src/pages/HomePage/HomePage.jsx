import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { fetchCamper } from "../../redux/Catalog/operationsCatalog";
import picture from "../../assets/Picture.jpg"
import css from "./HomePage.module.css"
import {Loader} from "../../components/Loader/Loader";

export default function HomePage() {
    const dispatch =  useDispatch();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
        dispatch(fetchCamper());
    }, [dispatch]);

    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/catalog')
    }

    return (
    loading ? <Loader/> : (<div className={css.container} >
        <img  className={css.img}
        src={picture}
        alt="image"
        width="1440"
        height="696"
        />
        <div className={css.text}>
            <div className={css.context}>
                <h1 className={css.title}>Campers of your dreams</h1>
                <p className={css.p}>You can find everything you want in our catalog</p>
            </div>
            <button className={css.button} type="submit" onClick={handleClick}>View Now</button>
        </div>
    </div>)
    )
}
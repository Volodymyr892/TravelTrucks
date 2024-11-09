import {BallTriangle} from "react-loader-spinner"
import css from "./Loader.module.css"

export const Loader = ()=>{
    return(
        <div className={css.loaderContainer} >
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color=" #e44848"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </div>
    )
}


export const LoaderBtn = ()=>{
    return(
        <div className={css.loaderContainerBtn} >
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color=" #e44848"
                ariaLabel="ball-triangle-loading"
                visible={true}
            />
        </div>
    )
}
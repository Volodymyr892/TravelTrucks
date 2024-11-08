import {BallTriangle} from "react-loader-spinner"
import css from "./Loader.module.css"

export default function Loader() {
    return(
        <div className={css.loaderContainer} >
         <BallTriangle
         height={100}
         width={100}
         radius={5}
         color="#912222"
         ariaLabel="ball-triangle-loading"
         visible={true}
//   height={100}
//   width={100}
//   radius={5}
//   color="#4fa94d"
//   ariaLabel="ball-triangle-loading"
//   wrapperStyle={{}}
//   wrapperClass=""
//   visible={true}
  />
        </div>
    )
}
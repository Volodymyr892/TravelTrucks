import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import logo from "../../assets/TravelTrucks.svg"


const makeNavLinkClass = ({isActive})=>`${css.home} ${isActive? css.active:''}`.trim();

export default function Navigation() {
    return(
        <nav className={css.container}>
        <div className={css.nav} >
            <img className={css.logo} src={logo} alt="logo"/>
                <div className={css.navigation}>
                    <NavLink className={makeNavLinkClass}  to="/">Home</NavLink>
                    <NavLink className={makeNavLinkClass} to="/catalog">Catalog</NavLink>
                </div>
        </div>
        </nav>
    )
}
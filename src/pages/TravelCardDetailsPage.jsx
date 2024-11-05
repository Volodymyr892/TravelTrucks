import { NavLink, Outlet } from "react-router-dom";

export default function TravelCardDetailsPage() {
    return (
        <div>
        Travel Card Details Page
        <ul>
            <li>
                <NavLink to="features">Features</NavLink>
            </li>
            <li>
                <NavLink to="reviews">Reviews</NavLink>
            </li>
        </ul>
        <Outlet/>
    </div>
    )
}
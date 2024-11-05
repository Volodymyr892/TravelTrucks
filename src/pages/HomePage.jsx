import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/catalog')
    }
    return (
    <div>
    <button type="submit" onClick={handleClick}>View Now</button>
    Home
    </div>
    )
}
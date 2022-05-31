import { Link } from "react-router-dom";


const BackArrow = () => {
    return(
        <div>
            <Link className="absolute left-2 top-1" to="/">
                    <img className="h-12 w-12" src="https://cdn-icons-png.flaticon.com/512/109/109618.png" />
            </Link>
        </div>
    )
}

export default BackArrow;
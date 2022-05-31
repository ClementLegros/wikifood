import { Link } from "react-router-dom";


const PlatPreview = (props) => {

    return (
        <Link to="/detailplat">
        <div className="border-2 border-gray-500 mx-5 flex flex-row h-auto my-3">
            <div className="w-1/2">
                <img src={props.img} />
            </div>
            <div className="w-1/2 flex flex-col">
                <label className="text-xl">{props.name}</label>
                <label className="text-sm mt-2">{props.description}</label>
                <img className="h-8 w-8" src={props.liked} />
            </div>
        </div>
        </Link>

    )
}

export default PlatPreview;
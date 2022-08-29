import { Link } from "react-router-dom";


function AddFavourites({movie}) {
   
    return (
        <div>
            <div >
            <Link to={`/details/${movie.id}`}>Details</Link>
            </div>
        </div>
    )
}

export default AddFavourites;
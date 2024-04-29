import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTable = ({ tours, allTour, setAllTour }) => {

    const { _id, average_cost, seasonality, country_Name, tourists_spot_name, travel_time } = tours;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tours/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = allTour.filter(tour => tour._id !== _id);
                            setAllTour(remaining);
                        }
                    })
            }
        });
    }

    return (
        <tr>
            <td>{country_Name}</td>
            <td>{tourists_spot_name}</td>
            <td>{travel_time}</td>
            <td>{seasonality}</td>
            <td>{average_cost}</td>
            <td>
                <Link to={`/updateSpot/${_id}`}><button className='btn bg-amber-400'>update</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
            </td>
        </tr>
    );
};

export default MyListTable;

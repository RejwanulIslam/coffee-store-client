import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setcoffees, coffees }) => {
    const { _id, Name, Quantity, Supplier, Teste, Category, Detels, Photo } = coffee;

    const handleDelet = (id) => {
        console.log('delet', id)

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


                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaning = coffees.filter(coffe => coffe._id != _id)
                             setcoffees(remaning)

                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={Photo} alt="Movie" className="h-40 w-40" /></figure>
                <div className="flex justify-between w-full ">
                    <div>
                        <h2 className="card-title">{Name}</h2>
                        <p>{Quantity}</p>
                        <p>{Supplier}</p>
                        <p>{Teste}</p>
                        <p>{Category}</p>
                        <p>{Detels}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical gap-y-3">
                            <button className="btn ">View</button>
                            <Link to={`updateCoffe/${_id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                            <button onClick={() => handleDelet(_id)} className="btn">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard;
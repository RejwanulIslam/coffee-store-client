import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function User() {
    const loadedusers = useLoaderData()
    const [user, setuser] = useState(loadedusers)
    const userhandledetete = (id) => {
        console.log(id)

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


                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaningUser= user.filter(user => user._id != id)
                            setuser(remaningUser)

                        }

                    })

            }
        });

    }
    return (
        <div>
            <h1 className='text-2xl'>Users:{user.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Creact Time</th>
                            <th> Time action</th>
                            <th> Last signIn Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map(user => <tr>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.creactTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>< button className='btn btn-active btn-neutral mr-4'>E</button>


                                    <button className='btn btn-active btn-neutral' onClick={() => userhandledetete(user._id)}>X</button></td>

                            </tr>

                            )

                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

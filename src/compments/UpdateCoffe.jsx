import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Addcoffe =()=>{
    const coffee = useLoaderData()
    const {_id,Name,Quantity,Supplier,Teste,Category,Detels,Photo} = coffee

     const handleUpdateCoffe =(e)=>{
        e.preventDefault()
         const form = e.target
         const Name = form.Name.value
        const Quantity = form.Quantity.value
        const Supplier = form.Supplier.value
        const Teste = form.Teste.value
        const Category = form.Category.value
        const Detels = form.Detels.value
        const Photo = form.Photo.value
        const updateCoffe= {Name,Quantity,Supplier,Teste,Category,Detels,Photo} 

        
        
     fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updateCoffe)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'success',
                text: 'Update successy ',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    
     })
    
        }
    

    return(
        
        <div>
           

            <form onSubmit={handleUpdateCoffe}>
                <div className="bg-[#f4f3f0] p-20">
               {/* from row-1 */}
                <div className="flex gap-5   mx-auto">
                     
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Update Coffe {Name}</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="Name"  placeholder="Enter your Coffe Name" defaultValue={Name} className="md:w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Availabale Quantity</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="Quantity" placeholder="Enter your Availabale Quantity" defaultValue={Quantity} className="md:w-full input input-bordered" />
                        </label>
                    </div>
                </div>
               {/* fotm row-2 */}
                <div className="flex gap-5 bg-[#f4f3f0]  mx-auto">
                     
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="Supplier" placeholder="Enter your Supplier" defaultValue={Supplier} className="md:w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Teste</span>
                        </label>
                        <label className="input-group ">

                            <input type="text"name="Teste" placeholder="Enter your Teste" defaultValue={Teste}  className="md:w-full input input-bordered" />
                        </label>
                    </div>
                </div>
               {/* from row 3*/}
                <div className="flex gap-5 bg-[#f4f3f0]  mx-auto">
                     
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="Category" placeholder="Enter Your Category" defaultValue={Category}  className="md:w-full input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Detels</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" name="Detels" placeholder="Enter Your Detels" defaultValue={Detels}  className="md:w-full input input-bordered" />
                        </label>
                    </div>

                  
                </div>
               {/* from row 4*/}
               <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group ">

                            <input type="text" defaultValue={Photo} name="Photo" placeholder="Enter Your Photo url"   className="md:w-full input input-bordered" />
                        </label>
                    </div>
            
                    <input type="Submit" value="Add Coffe" className="btn btn-block bg-slate-600"></input>
                    </div>
                              
            </form>
        </div>
    )
}

export default Addcoffe;
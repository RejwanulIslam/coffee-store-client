import { useContext } from "react"
import { Authcontex } from "../provider/Authprovider"

const SignUp = () => {
    const {creactuser} =useContext(Authcontex)

    const handlesignUp = e => {
     e.preventDefault()
     
     const name =e.target.name.value
     const email =e.target.email.value
     const password =e.target.password.value
     console.log('form sign up', email, password)
     creactuser(email, password,name)
     .then(result => {
        console.log(result.user)
        const creactTime = result?.user?.metadata?.creationTime


        const newUser ={name,email,creactTime}
              fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)

              })
             .then(res=>res.json())
             .then(data=>{
                console.log(data)
             })

      })

      .catch(error =>{
        console.log('error',error)
      })

    }
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                   
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default SignUp;
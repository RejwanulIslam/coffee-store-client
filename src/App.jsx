
import './App.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoffeeCard from './compments/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedcoffees = useLoaderData()
  
  const [coffees,setcoffees] = useState(loadedcoffees)
  const links=<>
  <NavLink to="/">Home</NavLink>
  <NavLink to="/addcoffe">AddCoffe</NavLink>
  
  <NavLink to="/signUp">SignUp</NavLink>
  <NavLink to="/signin">Login</NavLink>
  <NavLink to="/users">Users</NavLink>
  </>
  return (
    <>

    <div>
      <button className='btn btn-active btn-link bg-black'>{links}</button>
    </div>


      <h1 className='text-3xl font-bold'>Hot Hot Cold Coffe {coffees.length}</h1>

      <div className=' grid md:grid-cols-2    gap-5'>
        {coffees.map((coffee) => <CoffeeCard coffee={coffee} coffees={coffees} setcoffees={setcoffees}></CoffeeCard>)}
      </div>
    </>
  )
}

export default App

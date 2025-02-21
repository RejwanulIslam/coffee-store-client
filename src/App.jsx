
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './compments/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadedcoffees = useLoaderData()
  console.log(coffees)
  const [coffees,setcoffees] = useState(loadedcoffees)

  return (
    <>

      <h1 className='text-3xl font-bold'>Hot Hot Cold Coffe {coffees.length}</h1>

      <div className=' grid md:grid-cols-2    gap-5'>
        {coffees.map((coffee) => <CoffeeCard coffee={coffee} coffees={coffees} setcoffees={setcoffees}></CoffeeCard>)}
      </div>
    </>
  )
}

export default App

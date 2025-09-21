
import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import SelectedPlayer from './Component/SelectedPlayer/SelectedPlayer'


function App() {
  

 const fetchPlayers = fetch('./players.json').then(res=>res.json())
 const[toggle,setToggle] =useState(true)
 const[availableBalance,setAvailableBalance]=useState(560000799)

  
  





  return (
    <>
  <Navbar availableBalance={availableBalance}></Navbar>
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>Available</h1>
    <div>
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 ${toggle ? "bg-[#E7FE29]" : ""} border-r-0 rounded-l-2xl`}
          >AVailable</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 ${!toggle ? "bg-[#E7FE29]" : ""} border-l-0 rounded-r-2xl`}>Select<span>(0)</span></button>
    </div>
  </div>
  {toggle===true?  <Suspense fallback={<span class="loading loading-infinity loading-lg"></span>}>
  <AvailablePlayer availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  fetchPlayers={fetchPlayers}></AvailablePlayer>
  </Suspense>:<SelectedPlayer></SelectedPlayer>}

    
    </>
  )
}

export default App

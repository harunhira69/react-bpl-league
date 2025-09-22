
import { Suspense, useState } from 'react'
import './App.css'
  import { ToastContainer } from 'react-toastify';
import Navbar from './Component/Navbar/Navbar'
import AvailablePlayer from './Component/AvailablePlayer/AvailablePlayer'
import SelectedPlayer from './Component/SelectedPlayer/SelectedPlayer'
const fetchPromise=async()=>{
  const res = await fetch('/players.json')
  return res.json()
}
const fetchPlayers = fetchPromise()


function App() {
  


 const[toggle,setToggle] =useState(true)
 const[availableBalance,setAvailableBalance]=useState(60000000)
 const[purchasePlayers,setPurchasePlayers]=useState([])

 const removePlayer=(p)=>{
  console.log(p)


  const remaining = purchasePlayers.filter(player=>player.player_name!==p.player_name);
setPurchasePlayers(remaining)
setAvailableBalance(availableBalance+p.price)
 }


  
  





  return (
    <>
  <Navbar availableBalance={availableBalance}></Navbar>
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>{toggle===true?"Available":`Selected Player (${purchasePlayers.length}/6)`}</h1>
    <div>
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 ${toggle ? "bg-[#E7FE29]" : ""} border-r-0 rounded-l-2xl`}
          >AVailable</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 ${!toggle ? "bg-[#E7FE29]" : ""} border-l-0 rounded-r-2xl`}>Select<span>({purchasePlayers.length})</span></button>
    </div>
  </div>
  {toggle===true?  <Suspense fallback={<span class="loading loading-infinity loading-lg"></span>}>
  <AvailablePlayer purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  fetchPlayers={fetchPlayers}></AvailablePlayer>
  </Suspense>:<SelectedPlayer removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayer>}
<ToastContainer/>

    
    </>
  )
}

export default App

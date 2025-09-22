import React, { useState } from 'react';
import userImg from '../../assets/user.png';
import flagImg from '../../assets/report.png';
import { toast } from 'react-toastify';

const PlayerCart = ({player,availableBalance,setAvailableBalance,purchasePlayers,setPurchasePlayers}) => {
    const [isSelected,setIsSelected]= useState(false)
   
    const handleSelect=(playerData)=>{
     
     
           const price =
    typeof playerData.price === "string"
      ? parseFloat(playerData.price.replace("$", ""))
      : playerData.price;
         if(availableBalance<price){
            toast("You don't have enough coins")
               return
        }
        if(purchasePlayers.length>=6){
            toast("You can selcet maximum 6 player")
            return 
        }
          setIsSelected(true) 
          setAvailableBalance((prev)=>prev-price)
          setPurchasePlayers([...purchasePlayers,playerData])

    }
    return (
      <div class=" p-4  card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={player.player_image}
                        alt="Shoes" className='w-full h-[300px] object-cover' />
                </figure>
                <div class="mt-4">
                    <div className='flex'>
                        <img src={userImg}></img>
                        <h2 class="card-title ml-4">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-300 pb-4'>
                        <div className='flex items-center'>
                            <img src={flagImg}></img>
                            <span>{player.player_country}</span>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>Rating</span>
                        <span>{player.rating}</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>{player.batting_style}</span>
                        <span>{player.bowling_style}</span>
                    </div>
                    <div className='flex justify-between mt-4 items-center'> 
                        <p className='font-bold'>Price:${player.price}</p>
                        <button disabled={isSelected} onClick={()=>{
                            handleSelect(player)}} className='btn'>{isSelected?"Selected":"Chose Player"}</button>
                    </div>
                   
                </div>
            </div>
    );
};

export default PlayerCart;
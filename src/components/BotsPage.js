import React, { useEffect, useState,useRef } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [bots,setBots]=useState([])
  const [botArmy,handleBotArmy]=useState([]);
  console.log(botArmy)

  let currentDiv=useRef(null)
  const value1={currentDiv}
  console.log(value1)

  useEffect(()=>{
    fetch("https://json-server-vercel-gilt-six.vercel.app/bots")
  .then(res=>res.json())
  .then(data=>setBots(data))
  },[])



  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBots={setBots} handleBotArmy={handleBotArmy} bots={bots}/>
      <BotCollection bots={bots} setBots={setBots} botArmy={botArmy} handleBotArmy={handleBotArmy}/>
    </div>
  )
}

export default BotsPage;

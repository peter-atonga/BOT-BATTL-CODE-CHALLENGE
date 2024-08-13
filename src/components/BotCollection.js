import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,setBots,botArmy,handleBotArmy}) {
  // Your code here
  return (
    <div className="ui four column grid" >
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot)=>{
          return (
            <BotCard key={bot.id} bot={bot} setBots={setBots} botArmy={botArmy} handleBotArmy={handleBotArmy} bots={bots}/>
          )
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;

import React from "react";
import BotSoldier from "./BotSoldier"
function YourBotArmy({botArmy,setBots,handleBotArmy,bots}) {
  //your bot army code here...
  
console.log(botArmy)
  return (
    <div className="ui segment inverted olive bot-army"  >
      Your Bot Army
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}

          {botArmy.map((bot)=>{
            return (
              <BotSoldier key={bot.id} bot={bot} setBots={setBots} handleBotArmy={handleBotArmy} botArmy={botArmy} bots={bots}/>
            )
          })}
          

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

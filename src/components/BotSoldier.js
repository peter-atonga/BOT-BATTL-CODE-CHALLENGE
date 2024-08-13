import React from 'react';

function BotSoldier({bot,setBots,handleBotArmy,botArmy,bots}){
    function handleRemove(){
        console.log("g",bot);
        //removes the bot from the bot army
        handleBotArmy(botArmy.filter(b=> b.id !== bot.id))

        //returns the bot back to the bot army
        setBots([...bots.bot])
        console.log("g",bots)
    }

    return (
        <>
            <div className="ui column">
        <div className="ui card">

          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name}
            </div>
            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>
  
            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
            <span>
              <div className="ui center aligned segment basic">
                
                <button
                  className="ui mini red button"
                  onClick={handleRemove}
                  >
                REMOVE
                </button>
  
              </div>
            </span>
          </div>
        </div>
      </div>
        </>
    );
}

export default BotSoldier;

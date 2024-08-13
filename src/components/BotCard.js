import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

  
  function BotCard({bots,bot,setBots,botArmy,handleBotArmy}){

    function handleAddClick(){
      console.log(bot);
      if(!botArmy.some((soldier)=>soldier.id===bot.id)){
        handleBotArmy([...botArmy,bot])

        //This piece of code removes the bot ,from the bot collection when it is added to the bot army
        setBots(bots.filter((b)=>(b.id !== bot.id)))
        
        
      }
      else{
        alert("BOT IS ALREADY ADDED")
      }
      
    }

    function handleDeleteClick(){
      fetch(`http://localhost:8002/bots/${bot.id}`,{
        method:"DELETE"
      })
      .then((response)=>{
        if(response.ok){
          setBots(bots.filter((b)=>(b.id !== bot.id)))
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    return (

      <div className="ui column">
        <div
          className="ui card"
          key={bot.id}
          // onClick={()=>{
          //   handleClick(bot)}
          // }
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name}
              <i className={botTypeClasses[bot.bot_class]} />
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
                  className="ui mini green button"
                  onClick={handleAddClick}
                  >
                ADD
                </button>
  
                <button
                  className="ui mini red button"
                  onClick={handleDeleteClick}
                  >
                DELETE
                </button>
  
              </div>
            </span>
          </div>
        </div>
      </div>
    )

  }
    
  
export default BotCard;

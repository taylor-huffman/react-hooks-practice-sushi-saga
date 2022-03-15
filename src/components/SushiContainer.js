import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, setSushi, api, eatSushi, balance }) {
  return (
    <div className="belt">
      {sushi.map(sushiItem => {
        return <Sushi key={sushiItem.id} sushiItem={sushiItem} eatSushi={eatSushi} balance={balance} />
      })}
      <MoreButton setSushi={setSushi} api={api} />
    </div>
  );
}

export default SushiContainer;

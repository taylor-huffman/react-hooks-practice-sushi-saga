import React, { useState } from "react";

function Sushi({ sushiItem, eatSushi, balance }) {

  const [isEaten, setIsEaten] = useState(false)
  const { name, img_url, price, id } = sushiItem

  function handleOnClick() {
    if (balance >= price) {
      eatSushi(price, id)
      setIsEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url /*null*/}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

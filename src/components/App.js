import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [balance, setBalance] = useState(100)
  const [plates, setPlates] = useState([])

  function eatSushi(price, id) {
    if (balance >= price) {
      setBalance(balance => balance - price)
      setPlates([...plates, id])
    }
  }

  useEffect(() => {
    fetch(`${API}/?_limit=4`)
    .then(r => r.json())
    .then(sushi => setSushi(sushi))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} setSushi={setSushi} api={API} eatSushi={eatSushi} balance={balance} />
      <Table balance={balance} plates={plates} />
    </div>
  );
}

export default App;

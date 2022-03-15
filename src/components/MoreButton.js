import React from "react";

let page = 1

function MoreButton({ setSushi, api }) {

  function handleClick() {

    page++

    fetch(`${api}/?_limit=4&_page=${page}`)
    .then(r => r.json())
    .then(sushi => setSushi(sushi))
  }

  return <button onClick={handleClick/*null*/}>More sushi!</button>;
}

export default MoreButton;

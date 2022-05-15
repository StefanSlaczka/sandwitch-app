import React, { useState } from "react";
import ReactDOM from "react-dom";

function Top(this: any) {
  const [tM, setTM] = useState("");
  let [ingrents, setIngrents] = useState([""]);

  function addIngrent(ingrent: string) {
    if (ingrents.includes(ingrent)) {
      return;
    }
    setIngrents([...ingrents, ingrent]);
  }

  /*
   1. Make a fuction called done that will save the meat in a verable called meat
   2. Set the price of the meat if it is Turkey the price is 7.25 if it is Ham the price is 7.50 if it is Chicken the price is 9.25
   3. store the ingrents in the useState hook to a list called ing
   4. sort the ing list to this [lettuce, tomato, onions, pickles, mayo]
   5. then make a div with the meat, the price, the ingrents.
 */
  const done = () => {
    const meat = tM;
    let price = 0;
    let ing = [...ingrents];

    let newIng = [""];
    //  [lettuce, tomato, onions, pickles, mayo]
    if (ing.includes("Lettuce ")) {
      newIng.push("Lettuce ");
    }
    if (ing.includes("Tomato ")) {
      newIng.push("Tomato ");
    }
    if (ing.includes("Onions ")) {
      newIng.push("Onions ");
    }
    if (ing.includes("Pickles ")) {
      newIng.push("Pickles ");
    }
    if (ing.includes("Mayo ")) {
      newIng.push("Mayo ");
    }

    if (meat === "Turkey") {
      price = 7.25;
    } else if (meat === "Ham") {
      price = 7.5;
    } else if (meat === "Stake") {
      price = 9.25;
    } else {
      console.log(newIng);
    }
    if(tM !== ""){
      ReactDOM.render(
        <div className='py-6'>
          <div className='text-center border-solid border-4 border-indigo-700	w-1/2 text-3xl mx-auto font-semibold '>
            <h1>---Recipt---</h1>
            <h2>
              {meat} -- {price}
            </h2>
            <h3>Ingrents:</h3>
            <h3>{newIng}</h3>
          </div>
        </div>,
        document.getElementById("ok")
    );
    }
  };

  return (
    <React.Fragment>
      <div className='bg-green-400'>
        <div className='border-2 border-lime-900 bg-green-500'>
          <h1 className=' text-yellow-300 hero container max-w-screen-lg mx-auto  text-5xl font-bold text-center py-8 '>
            Make Your Sandwitch Today
          </h1>
        </div>
        <img
          className='hero container max-w-screen-lg mx-auto py-8 rotate-30 rounded-full rounded-br'
          src={require("./Pics/sandwich.jpg")}
          alt='sandwitch'
        ></img>{" "}
        <h3 className='text-yellow-300 hero container max-w-screen-lg mx-auto  text-5xl font-bold text-center py-8'>
          Make your sandwich, <br /> Yours
        </h3>
        <h1 className='text-yellow-300 hero container max-w-screen-lg mx-auto  text-5xl font-bold text-center py-8 '>
          Sandwich Meat: {tM}
        </h1>
        <div className='text-center '>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800'
            onClick={() => setTM("Turkey")}
          >
            Turkey Sub
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => setTM("Ham")}
          >
            Ham Sub
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800'
            onClick={() => setTM("Stake")}
          >
            Stake Sub
          </button>

          <div className='text-center p-8'>
            <button
              className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 rounded-full'
              onClick={() => setTM("")}
            >
              Reset
            </button>
          </div>
        </div>
        <h3 className='text-yellow-300 hero container max-w-screen-lg mx-auto  text-5xl font-bold text-center py-8 '>
          ingrents: {ingrents}
        </h3>
        <div className='text-center'>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Tomato ")}
          >
            Tomato
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Lettuce ")}
          >
            Lettie
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Pickles ")}
          >
            Pickels
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Onions ")}
          >
            Onions
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Mayo ")}
          >
            Mayo
          </button>
        </div>
        <div className='text-center p-8'>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 rounded-full'
            onClick={() => setIngrents([""])}
          >
            Reset
          </button>
        </div>
        <div className='text-center pb-6'>
          <button
            className='rounded-full h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 '
            onClick={done}
          >
            OrderNow
          </button>
          <form id='ok'></form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Top;

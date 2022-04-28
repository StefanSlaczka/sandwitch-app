import React, { useState } from "react";

function Top() {
  const [tM, setTM] = useState("");
  let [ingrents, setIngrents] = useState([""]);

  function addIngrent(ingrent: string) {
    if (ingrents.includes(ingrent)) {
      return;
    }
    setIngrents([...ingrents, ingrent]);
  }

  const Reciept = () => {
    return (
      <form>
        <h3>--Reciept--</h3>
        <h4>{tM}</h4>
        if(tM == "Turkey"){<h4>Total: 7.25</h4>}
        else if(tM == "Turkey"){<h4>Total: 7.50</h4>}
        else if(tM == "Turkey"){<h4>Total: 9.25</h4>}
      </form>
    );
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
              className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
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
            onClick={() => addIngrent("Lettie ")}
          >
            Lettie
          </button>
          <button
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => addIngrent("Pickels ")}
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
            className='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800'
            onClick={() => setIngrents([""])}
          >
            Reset
          </button>
        </div>
        <div className="text-center">
          <button className='Reciept h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800 '
          onSubmit={Reciept}>
            OrderNow -- comment future design
          </button>
          <form id="Reciept">

          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Top;

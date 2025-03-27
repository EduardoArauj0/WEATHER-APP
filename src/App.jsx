import React, { useState } from "react";
import fetchData from "./services/api";

import Card from "./components/card";


function App() {

  const [city, setCity] = useState('');
  const [date, setDate] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then( (response) => {
      setDate(response);
    });
  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Cidade" 
        className="p-3 rounded-lg outline-none"
        value={city}
        onChange={({ target: {value} }) => setCity(value)}
        />
        <button 
        type="submit"
        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card date = {date} />
    </div>
  );
}

export default App;

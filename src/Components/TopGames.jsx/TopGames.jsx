import React, { useState } from "react";
import TopGamesForm from "./TopGamesForm";
import TopGamesList from "./TopGamesList";
 
const videoGames = [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      isSold: true,
      platform: "Nintendo Switch",
      releaseYear: 2017,
    },
    {
      name: "Super Mario Odyssey",
      isSold: true,
      platform: "Nintendo Switch",
      releaseYear: 2017,
    },
    {
      name: "Animal Crossing: New Horizons",
      isSold: false,
      platform: "Nintendo Switch",
      releaseYear: 2020,
    },
    {
      name: "DOOM Eternal",
      isSold: true,
      platform: "Multiple",
      releaseYear: 2020,
    },
    {
      name: "Hades",
      isSold: false,
      platform: "Multiple",
      releaseYear: 2020,
    }
];
    
export default function TopGames() {

    const [games, setGames] = useState(videoGames) 
    
    const addGame = (newGame) => {
        const copyGames = [...games]
        copyGames.push(newGame)
        setGames(copyGames)

    } 
        
    
    return (
        <div>
            <TopGamesList games={games} />

            <TopGamesForm onSubmit={addGame} />

        </div>
    )
}

  

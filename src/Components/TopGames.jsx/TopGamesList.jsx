import React from 'react';

export default function TopGamesList ({ games }) {
  return (
    <div>
      <h2>Top Games</h2>
      <ul>
        {games.map((game, index) => <li key={index}>
                <strong>{game.name}</strong>,
                {game.platform},
                {game.releaseYear}
          </li>)}
      </ul>
    </div>
  )
}



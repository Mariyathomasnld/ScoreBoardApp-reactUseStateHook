// src/components/Scoreboard.js
import "../style/scoreBoard.scss";
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  // Defining the callback function:
  const incrementScore = (id) => {
    const new_players_array = players.map((player) => {
      // decide whether this player's score needs to be incremented
      if (player.id === id) {
        // and if so, create a new player object,
        return {
          // but first copying over the player object's data
          ...player,
          // and then overriding the score property to be incremented
          score: player.score + 1,
        };
      } else {
        // else, just keep them
        return player;
      }
    });

    set_players(new_players_array);
  };

  const resetScores = () => {
    const new_players_array = players.map((player) => ({
      // but first copying over the player object's data
      ...player,
      // and then overriding the score property to be incremented
      score: 0,
    }));

    set_players(new_players_array);
  };

  const randomizeScores = () => {
    const new_players_array = players.map((player) => ({
      // but first copying over the player object's data
      ...player,
      // and then overriding the score property to be incremented
      score: Math.floor(Math.random() * 101),
    }));

    set_players(new_players_array);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    set_players([
      ...players,
      {
        id: Math.random(), // we should find a better way of defining the id but this is fine for now
        name,
        score: 0,
      },
    ]);
  };

  return (
    <div className="Scoreboard">
      <div className="Reset">
        
          Sort order:{" "}
          <select onChange={change_sorting} value={sort_by}>
            <option value="score">Sort by score</option>
            <option value="name">Sort by name</option>
          </select>
         
        <button onClick={resetScores}>Reset</button>{" "}
        <button onClick={randomizeScores}>Randomize</button>
      </div>

      <p>Player's scores:</p>
      <ul>
        {players_sorted.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm 
      addPlayer={addPlayer} />
    </div>
  );
}

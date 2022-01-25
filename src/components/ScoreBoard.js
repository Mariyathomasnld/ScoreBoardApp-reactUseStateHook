// src/components/Scoreboard.js
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

function compareScore(playerA, PlayerB) {
  return playerA.score - PlayerB.score;
}

function compareName(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen ", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sort_by, setSort_by] = useState("score");
  function change_Sorting(event) {
    setSort_by(event.target.value);
  }

  const players_Sorted = [...players].sort(
    sort_by === "score" ? compareScore : compareName
  );

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>

      <p>
        Sort order:{" "}
        <select onChange={change_Sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>

      <ul>
        {players_Sorted.map((player) => (
          <Player key={player.id} name={player.name} score={player.score} />
        ))}
      </ul>

      <AddPlayerForm />
    </div>
  );
}

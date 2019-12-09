import React from "react";

import Puzzle from "../components/Games/Puzzle/Puzzle";
import PuzzleInstructions from "../components/Games/Puzzle/Instructions";

import DrawTrain from "../components/Games/DrawTrain/DrawTrain";
import DrawTrainInstructions from "../components/Games/FoldTrain/Instructions";

import MemoryGame from "../components/Games/Memory/Memory";
import MemoryInstructions from "../components/Games/Memory/Instructions";

const games = [
  {
    title: "Draw a Train",
    link: "drawtrain",
    type: "handsgames",
    component: DrawTrain,
    instructions: <DrawTrainInstructions />
  },
  {
    title: "Puzzle",
    link: "puzzle",
    type: "device",
    component: Puzzle,
    instructions: <PuzzleInstructions />
  },
  {
    title: "Memory Game",
    link: "memory",
    type: "device",
    component: MemoryGame,
    instructions: <MemoryInstructions />
  }
];

export default games;

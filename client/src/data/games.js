import React from "react";
import Puzzle from "../components/Games/Puzzle/Puzzle";
import FoldTrain from "../components/Games/FoldTrain/FoldTrain";
import MemoryGame from "../components/Games/Memory/Memory";

const games = [
  {
    title: "Fold a train",
    link: "foldtrain",
    type: "handsgames",
    component: FoldTrain
  },
  {
    title: "Puzzle",
    link: "puzzle",
    type: "device",
    component: Puzzle
  },
  {
    title: "Memory Game",
    link: "memory",
    type: "device",
    component: MemoryGame
  }
];

export default games;

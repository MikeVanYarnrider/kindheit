import React from "react";

import Puzzle from "../components/Games/Puzzle/Puzzle";
import PuzzleInstructions from "../components/Games/Puzzle/Instructions";

import FoldTrain from "../components/Games/FoldTrain/FoldTrain";
import FoldTrainInstructions from "../components/Games/FoldTrain/Instructions";

import MemoryGame from "../components/Games/Memory/Memory";
import MemoryInstructions from "../components/Games/Memory/Instructions";

import EnergyFlow from "../components/Games/EnergyFlow/EnergyFlow";
import EnergyFlowInstructions from "../components/Games/EnergyFlow/Instructions";

const games = [
  {
    title: "Fold a train",
    link: "foldtrain",
    type: "handsgames",
    component: FoldTrain,
    instructions: <FoldTrainInstructions />
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
  },
  {
    title: "Energy Flow",
    link: "energyflow",
    type: "device",
    component: EnergyFlow,
    instructions: <EnergyFlowInstructions />
  }
];

export default games;

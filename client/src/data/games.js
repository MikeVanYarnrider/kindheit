import React from "react";

import Puzzle from "../components/Games/Puzzle/Puzzle";
import PuzzleInstructions from "../components/Games/Puzzle/Instructions";

import DrawTrain from "../components/Games/DrawTrain/DrawTrain";
import DrawTrainInstructions from "../components/Games/DrawTrain/Instructions";

import LegoBuild from "../components/Games/LegoBuild/LegoBuild";
import LegoBuildInstructions from "../components/Games/LegoBuild/Instructions";

import MemoryGame from "../components/Games/Memory/Memory";
import MemoryInstructions from "../components/Games/Memory/Instructions";

import EnergyFlow from "../components/Games/EnergyFlow/EnergyFlow";
import EnergyFlowInstructions from "../components/Games/EnergyFlow/Instructions";

import { LegoImg, TrainImg, PuzzleImg, MemoryImg } from "../images";

const games = [
  {
    title: "Draw a Train",
    link: "drawtrain",
    type: "handsgames",
    image: TrainImg,
    component: DrawTrain,
    instructions: <DrawTrainInstructions />
  },
  {
    title: "Build a Lego Train",
    link: "legobuild",
    type: "handsgames",
    image: LegoImg,
    component: LegoBuild,
    instructions: <LegoBuildInstructions />
  },
  {
    title: "Puzzle",
    link: "puzzle",
    type: "device",
    image: PuzzleImg,
    component: Puzzle,
    instructions: <PuzzleInstructions />
  },
  {
    title: "Memory Game",
    link: "memory",
    type: "device",
    image: MemoryImg,
    component: MemoryGame,
    instructions: <MemoryInstructions />
  },
  {
    title: "Energy Flow",
    link: "energyflow",
    type: "device",
    image: PuzzleImg,
    component: EnergyFlow,
    instructions: <EnergyFlowInstructions />
  }
];

export default games;

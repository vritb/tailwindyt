import React from "react";
import { createBoard } from "@wixc3/react-board";
import Hero from "../../../components/Hero";

export default createBoard({
  name: "Hero",
  Board: () => <Hero />,
  isSnippet: true,
});

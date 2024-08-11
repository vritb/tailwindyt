import React from "react";
import { createBoard } from "@wixc3/react-board";
import SpeakingPage from "../../../app/speaking/page";

export default createBoard({
  name: "SpeakingPage",
  Board: () => <SpeakingPage />,
  isSnippet: true,
});

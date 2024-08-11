import React from "react";
import { createBoard } from "@wixc3/react-board";
import AboutPage from "../../../app/about/page";

export default createBoard({
  name: "AboutPage",
  Board: () => <AboutPage />,
  isSnippet: true,
});

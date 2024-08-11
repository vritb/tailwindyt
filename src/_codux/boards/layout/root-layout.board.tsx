import React from "react";
import { createBoard } from "@wixc3/react-board";
import RootLayout from "../../../app/layout";

export default createBoard({
  name: "RootLayout",
  Board: () => <RootLayout>Content goes here</RootLayout>,
  isSnippet: true,
});

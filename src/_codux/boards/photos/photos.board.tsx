import React from "react";
import { createBoard } from "@wixc3/react-board";
import Photos from "../../../components/Photos";

export default createBoard({
  name: "Photos",
  Board: () => <Photos />,
  isSnippet: true,
});

import React from "react";
import { createBoard } from "@wixc3/react-board";
import Newsletter from "../../../components/Newsletter";

export default createBoard({
  name: "Newsletter",
  Board: () => <Newsletter />,
  isSnippet: true,
});

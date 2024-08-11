import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Providers } from "../../../app/providers";

export default createBoard({
  name: "Providers",
  Board: () => <Providers>{/* Add your components here */}</Providers>,
  isSnippet: true,
});

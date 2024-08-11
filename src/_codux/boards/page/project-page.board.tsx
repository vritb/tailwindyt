import React from "react";
import { createBoard } from "@wixc3/react-board";
import ProjectPage from "../../../app/projects/page";

export default createBoard({
  name: "ProjectPage",
  Board: () => <ProjectPage />,
  isSnippet: true,
});

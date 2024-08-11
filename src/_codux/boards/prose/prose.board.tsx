import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Prose } from "../../../components/Prose";

export default createBoard({
  name: "Prose",
  Board: () => (
    <Prose
      dangerouslySetInnerHTML={{
        __html: "Sample text with <strong>HTML</strong> content.",
      }}
      onCopy={(event) => console.log("Copy event", event)}
      onCut={(event) => console.log("Cut event", event)}
      onPaste={(event) => console.log("Paste event", event)}
      onFocus={(event) => console.log("Focus event", event)}
      onBlur={(event) => console.log("Blur event", event)}
      onChange={(event) => console.log("Change event", event)}
      onKeyDown={(event) => console.log("KeyDown event", event)}
      onKeyPress={(event) => console.log("KeyPress event", event)}
      onKeyUp={(event) => console.log("KeyUp event", event)}
      onLoad={(event) => console.log("Load event", event)}
      onError={(event) => console.log("Error event", event)}
    />
  ),
  isSnippet: true,
});

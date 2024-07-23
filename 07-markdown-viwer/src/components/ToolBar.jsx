import React from "react";

export function TollBar({ insertText }) {
  return (
    <div className="tool-bar">
      <button onClick={() => insertText("# ", "")}>h1</button>
      <button onClick={() => insertText("## ", "")}>h2</button>
      <button onClick={() => insertText("**", "**")}>Bold</button>
      <button onClick={() => insertText("*", "*")}>Italic</button>
      <button onClick={() => insertText("[", "](https://)")}>Link</button>
      <button onClick={() => insertText("```", "```")}>Code block</button>
      <button onClick={() => insertText("- ", "")}>List item</button>
      <button onClick={() => insertText("\n---\n", "")}>Horizontal line</button>
    </div>
  );
}

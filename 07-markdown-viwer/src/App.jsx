import React, { useState, useEffect, useRef } from "react";
import { marked } from "marked";

import { TollBar } from "./components/ToolBar";

export function App() {
  const [text, setText] = useState(
    localStorage.getItem("markdownText") || "# Digite o markdown aqui..."
  );

  function renderText() {
    return {
      __html: marked(text),
    };
  }

  function insertText(before, after) {
    const textArea = textAreaRef.current; // texto na textarea
    const start = textArea.selectionStart; // começo texto selecionado
    const end = textArea.selectionEnd; // final texto selecionado
    const previousText = textArea.value; // texto anterior - atual no input
    const beforeText = previousText.substring(0, start);
    const selectText = previousText.substring(start, end);
    const afterText = previousText.substring(end);

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`;

    setText(newText);
    textArea.focus();
  }

  const textAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  });

  return (
    <div className="container">
      <TollBar insertText={insertText} />
      <textarea
        value={text}
        ref={textAreaRef}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div dangerouslySetInnerHTML={renderText()} />
    </div>
  );
}

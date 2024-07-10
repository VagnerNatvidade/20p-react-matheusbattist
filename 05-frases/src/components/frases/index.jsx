import { useEffect, useState } from "react";

export function Frases({ author, text }) {
  const [traduction, setTraduction] = useState("");

  useEffect(() => {
    setTraduction("");
  }, [text]);

  async function frasesTraduction(language) {
    try {
      const res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "pt",
          target: language,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      setTraduction(data.translatedText);
    } catch (error) {
      console.log("Erro ao traduzir...");
    }
  }

  return (
    <div>
      <blockquote className="blockquote">
        <p>{traduction ? traduction : text}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <button
        className="btn btn-primary m-1"
        onClick={() => frasesTraduction("en")}
      >
        Traduzir para Inglês
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => frasesTraduction("es")}
      >
        Traduzir para Espanhol
      </button>
    </div>
  );
}

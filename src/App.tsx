import styles from "./app.module.css";
import { useEffect, useState } from "react";

import { WORDS, Challenge } from "./utils/words";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Letter } from "./components/Letter";
import { LetterUsed } from "./components/LettersUsed";
import { Tip } from "./components/Tip";

export default function App() {
  const [letter, setLetter] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setAttempts(0);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>

        <LetterUsed />
      </main>
    </div>
  );
}

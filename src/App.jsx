import { useState } from "react";
import "./App.css";
import rockImg from "./images/rock-img.png";
import paperImg from "./images/paper-img.png";
import scissorImg from "./images/scissor-img.png";
import headingImg from "./images/heading-img.png";

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState("Play your move!");
  const [msgColor, setMsgColor] = useState("rgb(22, 22, 22)");

  const generateCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
  };

  const drawGame = () => {
    setMessage("Game was Draw. Play again! 🫠");
    setMsgColor("rgb(22, 22, 22)");
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setUserScore((prev) => prev + 1);
      setMessage(`You win! Your ${userChoice} beats ${compChoice} 👏`);
      setMsgColor("green");
    } else {
      setCompScore((prev) => prev + 1);
      setMessage(`You Lose. ${compChoice} beats your ${userChoice} 🥲`);
      setMsgColor("red");
    }
  };

  const playGame = (userChoice) => {
    const compChoice = generateCompChoice();

    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "Rock") {
        userWin = compChoice === "Paper" ? false : true;
      } else if (userChoice === "Paper") {
        userWin = compChoice === "Scissor" ? false : true;
      } else {
        userWin = compChoice === "Rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  return (
    <>
      <div className="container">
        <div className="head">
          <img src={headingImg} className="heading" />
        </div>

        <div className="score-board">
          <div className="score">
            <p id="user-score">{userScore}</p>
            <p>YOU</p>
          </div>
          <div className="score">
            <p id="comp-score">{compScore}</p>
            <p>COMPUTER</p>
          </div>
        </div>

        <div className="msg-container">
          <p id="msg" style={{ color: msgColor }}>
            {message}
          </p>
        </div>

        <div className="choices">
          <div className="choice" id="one" onClick={() => playGame("rock")}>
            <img src={rockImg} id="rock" />
          </div>
          <div className="choice" id="two" onClick={() => playGame("paper")}>
            <img src={paperImg} id="paper" />
          </div>
          <div
            className="choice"
            id="three"
            onClick={() => playGame("scissor")}
          >
            <img src={scissorImg} id="scissor" />
          </div>
        </div>

        <div className="footer">
          <p>Created by Soumitri Mishra 🌸</p>
        </div>
      </div>
    </>
  );
}

export default App;

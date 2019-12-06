import axios from "axios";

const postGameTime = props => {
  console.log("did unmount");

  const gameEndTime = new Date();
  const gameTime = (gameEndTime - this.state.gameStartTime) / 1000;
  axios
    .post("/child/play/handsgames/foldtrain", {
      gameTime: gameTime,
      user: props.user
    })
    .then(response => {
      console.log("ROUTE??", response);
    })
    .catch(err => console.log(err));
};

export { postGameTime };

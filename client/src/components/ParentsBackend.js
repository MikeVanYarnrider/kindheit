import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../src/assets/stylesheet/components/parent.scss";
import "../../src/assets/stylesheet/components/button.scss";
import Button from "../../src/components/Button";

class ParentsBackend extends React.Component {
  state = {
    children: []
  };

  componentDidMount() {
    const parent = this.props.parentUser._id;
    axios.post("/parent", { parent }).then(res => {
      this.setState({
        children: { ...res.data.children }
      });
    });
  }

  render() {
    const children = Object.values(this.state.children).map((child, index) => {
      let timeSum = 0;
      const time = child.sessionTimes.map(times => {
        const { time, timeStamp, game } = times;
        timeSum += time;
        return (
          <li key={time}>
            {game}: {time.toFixed(2)} on {timeStamp.slice(4, 15)}
          </li>
        );
      });

      const { _id, username, profileImgUrl } = child;
      return (
        <div key={_id} className="flex-container align-center kids-card">
          <div>
            <img src={profileImgUrl} width="200px" alt="profile" />
          </div>
          <div>
            <p>
              <strong>Name:</strong> {username}
            </p>
            <div>
              <h5>Last 5 played games:</h5>
              <ol>{time.slice(time.length - 5, time.length)}</ol>
            </div>
            <p>Overall screen time {(timeSum / 60).toFixed(2)} min</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Hello {this.props.parentUser.username}</h1>
        <div className="flex-container between">
          {children}
          <div className="flex-container align-center kids-card text-center justify-center">
            <h3 className="">Add your kid</h3>
            <Button variant="btn-rnd select" href="/childsignup" />
          </div>
        </div>
      </div>
    );
  }
}

export default ParentsBackend;

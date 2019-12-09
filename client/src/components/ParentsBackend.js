import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
          <div key={time}>
            <p>
              {game}: {time.toFixed(2)} on {timeStamp.slice(4, 15)}
            </p>
          </div>
        );
      });

      const { _id, username, profileImgUrl } = child;
      return (
        <div key={_id}>
          <img src={profileImgUrl} width="100px" alt="profile" />
          <div>
            <p>
              <strong>Name:</strong> {username}
            </p>
            <div>
              <h4>Last 5 played games:</h4>
              <span>{time.slice(time.length - 5, time.length)}</span>
            </div>
            <p>Overall screen time {(timeSum / 60).toFixed(2)} min</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1>Hello {this.props.parentUser.username}</h1>
        {this.state.children.length === 0 || !this.state.children ? (
          <h2>
            No children available. Create <Link to="/childsignup">here</Link>
          </h2>
        ) : (
          <div>{children}</div>
        )}
      </div>
    );
  }
}

export default ParentsBackend;

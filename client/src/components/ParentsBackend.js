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
      this.setState(
        {
          children: { ...res.data.children }
        },
        () => {
          console.log(...res.data.children);
        }
      );
    });
  }

  render() {
    // const children = this.state.children;
    const children = Object.values(this.state.children).map(child => {
      const { _id, username, sessionTimes, profileImgUrl } = child;
      return (
        <div
          key={_id}
          className="container-flex container-indent container-ratio"
        >
          <img src={profileImgUrl} width="100px" alt="profile image" />
          <div>
            <p>
              <strong>Name:</strong> {username}
            </p>
            {sessionTimes.length > 0 ? (
              <p>
                Screentime:{" "}
                {sessionTimes.reduce((acc, val) => {
                  return acc + val;
                })}
              </p>
            ) : (
              <p>Screentime: no screenTime available</p>
            )}
          </div>
        </div>
      );
    });
    console.log(this.state.children.username);

    return (
      <div>
        <h1>Hello</h1>
        <div>{children}</div>
        {this.state.children.length === 0 && (
          <h2>
            No children available. Create <Link to="/childsignup">here</Link>
          </h2>
        )}
      </div>
    );
  }
}

export default ParentsBackend;

// parent: [ 5debb1e9c6f1e7751f24aa8b ],
//   gameStatus: [],
//   sessionTimes: [ 2.446, 8.801 ],
//   _id: 5debb1fdc6f1e7751f24aa8c,
//   username: 'kid1',
//   password: '$2b$10$IF5c875qziPmYbf3aJ7Un.W5NjHyou.FeDiHjD.kF6XKq0l/iVJse',
//   birthDate: 0001-01-01T00:00:00.000Z,
//   profileImgUrl: '/static/media/dragon.4a6b00d5.png',
//   type: 'child',
//   __v: 0

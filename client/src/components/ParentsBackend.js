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
    const children = Object.values(this.state.children).map((child, i) => {
      return child[i];
    });
    console.log(this.state.children.username);

    return (
      <div>
        <h1>Hello</h1>
        {/* 
        {this.state.children.length === 0 && (
          <h2>
            No children available. Create <Link to="/childsignup">here</Link>
          </h2>
        )}
         */}
        {/* <p>{children}</p> */}
      </div>
    );
  }
}

export default ParentsBackend;

import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/stylesheet/components/ChildrenLogin/sliderLoginProfile.scss";
import axios from "axios";

import {
  profileImgDragon,
  profileImgPrincess,
  profileImgBoy,
  profileImgCrocodile,
  profileImgCow,
  profileImgPig
} from "../../images";

// import Axios from "axios";
// import ChildLogin from "../ChildLogin";
// import { childLogin } from "../services/auth";

const profileImgArr = [
  profileImgDragon,
  profileImgPrincess,
  profileImgBoy,
  profileImgCrocodile,
  profileImgCow,
  profileImgPig
];

const defaultProfiles = [
  {
    gameStatus: [],
    parent: ["111111111111111111111111"],
    password: "pppp",
    profileImgUrl: profileImgArr[2],
    sessionTimes: [],
    type: "child",
    username: "Max",
    _id: "111111111111111111111111"
  },
  {
    gameStatus: [],
    parent: ["111111111111111111111111"],
    password: "pppp",
    profileImgUrl: profileImgArr[1],
    sessionTimes: [],
    type: "child",
    username: "Marie",
    _id: "111111111111111111111111"
  }
];

class CarouselProfileImages extends Component {
  state = {
    profileImgUrl: this.props.profileImgUrl,
    chosenProfileImg: this.props.chosenProfileImg,
    profiles: defaultProfiles,
    chosenProfile: this.props.chosenProfile
  };

  selectProfileImage = event => {
    this.setState(
      {
        chosenProfileImg: event,
        profileImgUrl: profileImgArr[event]
      },
      () => {
        this.setState({
          chosenProfile: this.state.profiles[this.state.chosenProfileImg]
        });
        this.props.setChosenProfile(this.state.chosenProfile);
      }
    );

    /* make event async!!!    await this.setState(
      {
        chosenProfileImg: event,
        profileImgUrl: profileImgArr[event]
      }
    );
    await this.setState({
      chosenProfile: this.state.profiles[this.state.chosenProfileImg]
    }); */

    this.props.setChosenProfileImg(event);
    this.props.setProfileImg(profileImgArr[event]);
  };

  componentDidMount() {
    axios
      .get("/api/auth/getProfiles")
      .then(response => {
        if (response.data.length !== 0) {
          let profiles = response.data;
          this.setState({ profiles: profiles, chosenProfile: profiles[0] });
          this.props.setChosenProfile(this.state.chosenProfile);
        }
      })
      .catch(err => {
        return err;
      });
  }

  render() {
    let styles = {
      margin: "auto",
      width: "200px"
    };
    return (
      <div style={(styles, { margin: "30px 0 0 0" })}>
        <Carousel
          autoPlay={false}
          interval={10000}
          showThumbs={false}
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          onChange={this.selectProfileImage}
          onClickItem={this.selectProfileImage}
          onClickThumb={this.selectProfileImage}
          dynamicHeight={true}
          centerSlidePercentage={50}
          height={100}
          selectedItem={this.state.chosenProfileImg}
        >
          {this.state.profiles.map(profile => {
            let key = profile.profileImgUrl.match(/media[/](\w+)/)[1];
            return (
              <div key={key}>
                <img
                  src={profile.profileImgUrl}
                  style={{ borderRadius: "50%" }}
                  alt="dragon"
                />
                <p className="legend">{profile.username}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarouselProfileImages;

import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/stylesheet/components/ChildrenSignup/sliderProfile.scss";

import {
  profileImg_boy_brownHair,
  profileImg_boy_darkSkintone,
  profileImg_boy_purpleHair,
  profileImg_girl_blondeHair,
  profileImg_girl_redHair,
  profileImg_girl_blueHair,
  profileImg_girl_pinkHair
} from "../../images";

const profileImgArr = [
  profileImg_boy_brownHair,
  profileImg_girl_redHair,
  profileImg_boy_darkSkintone,
  profileImg_girl_pinkHair,
  profileImg_girl_blondeHair,
  profileImg_boy_purpleHair,
  profileImg_girl_blueHair
];

class CarouselProfileImages extends Component {
  state = {
    profileImgUrl: this.props.profileImgUrl,
    chosenProfileImg: this.props.chosenProfileImg
  };

  selectProfileImage = event => {
    this.setState({
      chosenProfileImg: event,
      profileImgUrl: profileImgArr[event]
    });

    this.props.setChosenProfileImg(event);
    this.props.setProfileImg(profileImgArr[event]);
  };

  render() {
    let styles = {
      margin: "auto",
      width: "500px"
    };
    return (
      <div
        className="signupProfiles"
        style={(styles, { margin: "30px 0 0 0" })}
      >
        <Carousel
          autoPlay={false}
          interval={10000}
          showThumbs={true}
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
          onClickItem={this.selectProfileImage}
          onClickThumb={this.selectProfileImage}
          dynamicHeight={true}
          emulateTouch={true}
          centerSlidePercentage={50}
          height={100}
          swipeable={true}
          selectedItem={this.state.chosenProfileImg}
        >
          {profileImgArr.map(image => {
            let key = image.match(/media[/](\w+)/)[1];
            return (
              <div key={key}>
                <img src={image} style={{ borderRadius: "50%" }} alt="dragon" />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarouselProfileImages;

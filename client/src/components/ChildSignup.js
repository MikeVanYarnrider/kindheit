import React, { Component } from "react";
import DatePicker from "react-date-picker";
import { signupChild } from "./services/auth";
import CarouselProfileimages from "../components/Signup_Children/CarouselProfileImages";
import ChildrenPassword from "../components/Signup_Children/ChildrenPassword";
import Button from "../../src/components/Button";
import "../assets/stylesheet/components/ChildrenSignup/signupForm.scss";
import "../assets/stylesheet/components/loginstyle.scss";
import { error, loginChildIcon } from "../images";

import { profileImg_boy_brownHair } from "../images";
import axios from "axios";

const profileImgArr = [profileImg_boy_brownHair];

class ChildSignup extends Component {
  state = {
    childname: "",
    password: "",
    birthDate: "",
    page: 0,
    profileImgUrl: profileImgArr[0],
    chosenProfileImg: 0,
    parent: this.props.parentUser._id,
    passwordImages: [],
    changeImage: 0,
    allChildrenProfiles: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      nameDuplicat: false,
      nameEmpty: false,
      error: ""
    });
  };

  handleDate = date => {
    console.log(date);
    this.setState({
      birthDate: date,
      nameDuplicat: false,
      nameEmpty: false,
      error: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let nameArr = this.state.childname.split("");
    let newName =
      nameArr
        .slice(0, 1)
        .join("")
        .toUpperCase() +
      nameArr
        .slice(1)
        .join("")
        .toLowerCase();

    signupChild(
      newName,
      this.state.password,
      this.state.birthDate,
      this.state.profileImgUrl,
      this.state.parent
    ).then(data => {
      if (data.message) {
        this.setState({
          error: data.message
        });
      } else {
        console.log(data);
        this.props.setUser(data);
        this.props.history.push("/");
      }
    });
  };

  componentDidMount() {
    axios
      .get("/api/auth/getProfiles")
      .then(response => {
        if (response.data.length !== 0) {
          let profiles = response.data;
          let profileNames = profiles.map(profile => {
            return profile.username.toUpperCase();
          });
          this.setState({ allChildrenProfiles: profileNames });
        }
      })
      .catch(err => {
        return err;
      });
  }

  setPassword = password => {
    this.setState({ password: password, error: "" });
  };
  setPasswordImage = passwordImages => {
    this.setState({ passwordImages: passwordImages });
  };
  setChangePassword = changeImage => {
    this.setState({ changeImage: changeImage });
  };
  setProfileImage = profileImage => {
    this.setState({ profileImgUrl: profileImage });
  };
  setChosenProfileImage = num => {
    this.setState({ chosenProfileImg: num });
  };

  backwardClick = event => {
    if (this.state.page > 0) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  forwardClick = event => {
    if (!this.state.childname) {
      this.setState({
        nameEmpty: true
      });
      return;
    }

    if (
      this.state.allChildrenProfiles.includes(
        this.state.childname.toUpperCase()
      )
    ) {
      this.setState({
        nameDuplicat: true
      });
      return;
    } else {
      this.setState({
        nameDuplicat: false
      });
    }

    if (this.state.page === 2 && this.state.password.length < 4) {
      this.setState({
        error: "Das Passwort ist leider noch zu kurz!"
      });
      return;
    }

    if (this.state.page < 3) {
      this.setState({
        page: this.state.page + 1
      });
    }
  };

  render() {
    return (
      <div className="mainWrapper">
        <div className="header">
          <h1>Erstellen Sie ein Konto für Ihr Kind!</h1>
        </div>

        <div className="wrapperDiv">
          {this.state.page === 0 ? (
            <Button
              variant="btn-rnd transparent back"
              onClick={this.backwardClick}
            />
          ) : (
            <Button variant="btn-rnd back" onClick={this.backwardClick} />
          )}

          <form onSubmit={this.handleSubmit} className="form">
            {this.state.page === 0 && (
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <label
                  htmlFor="childname"
                  style={{
                    color: "white",
                    marginLeft: "20px",
                    alignSelf: "flex-start"
                  }}
                >
                  Name des Kindes
                </label>
                <input
                  type="text"
                  className="inputField"
                  name="childname"
                  id="childname"
                  placeholder="Name"
                  value={this.state.childname}
                  onChange={this.handleChange}
                />
                {this.state.nameEmpty && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "7px",
                      marginTop: "100px",
                      position: "absolute"
                    }}
                  >
                    <div
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 20px 0px 20px",
                        margin: "0",
                        borderRadius: "7px"
                      }}
                    >
                      <img
                        src={error}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <p>Bitte wählen Sie einen Namen aus!</p>
                    </div>
                  </div>
                )}
                {this.state.nameDuplicat && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "7px",
                      marginTop: "100px",
                      position: "absolute"
                    }}
                  >
                    <div
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 20px 0px 20px",
                        margin: "0",
                        borderRadius: "7px"
                      }}
                    >
                      <img
                        src={error}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <p>Der Name ist leider schon vergeben!</p>
                    </div>
                  </div>
                )}
              </section>
            )}

            {this.state.page === 1 && (
              <CarouselProfileimages
                {...this.state}
                setProfileImg={this.setProfileImage}
                setChosenProfileImg={this.setChosenProfileImage}
              />
            )}

            {this.state.page === 2 && (
              <>
                <p style={{ position: "absolute", marginTop: "-30px" }}>* Das Kind kann sich aus vier Bildern ein eigenes Passwort zusammenstellen.</p>
                <ChildrenPassword
                  {...this.state}
                  setPassword={this.setPassword}
                  setPasswordImage={this.setPasswordImage}
                  setChangePassword={this.setChangePassword}
                />
                {this.state.error && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "7px",
                      marginTop: "180px",
                      position: "absolute",
                      maxWidth: "300px"
                    }}
                  >
                    <div
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 20px 0px 20px",
                        margin: "0",
                        borderRadius: "7px"
                      }}
                    >
                      <img
                        src={error}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <p>{this.state.error}</p>
                    </div>
                  </div>
                )}
              </>
            )}
            {this.state.page === 3 && (
              <div className="signupPage">
                <div>
                  {/*    <label htmlFor="birthdate">Birthdate:</label> */}
                  <section
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <label
                      htmlFor="childname"
                      style={{
                        color: "white",
                        marginLeft: "50px",
                        alignSelf: "flex-start"
                      }}
                    >
                      Geburtsdatum des Kindes
                    </label>
                    <DatePicker
                      type="date"
                      name="birthDate"
                      id="birthdate"
                      style={{
                        padding: "10px 15px 10px 15px",

                        borderRadius: "30px",
                        outline: "none",
                        fontSize: "1.7em",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "3px solid white"
                      }}
                      onChange={this.handleDate}
                      value={this.state.birthDate}
                    />
                  </section>

                  {/*   <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    style={{
                      padding: "10px 15px 10px 15px",

                      borderRadius: "30px",
                      outline: "none",
                      fontSize: "1.7em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      backgroundColor: "transparent",
                      border: "3px solid white"
                    }}
                    value={this.state.birthDate}
                    onChange={this.handleChange}
                  /> */}
                </div>{" "}
                {this.state.error && (
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "7px",
                      maxWidth: "500px"
                    }}
                  >
                    <div
                      style={{
                        color: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 20px 0px 20px",
                        margin: "0",
                        borderRadius: "7px"
                      }}
                    >
                      <img
                        src={error}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <p>{this.state.error}</p>
                    </div>
                  </div>
                )}
                <button
                  style={{
                    padding: "10px 15px 10px 15px",
                    width: "245px",
                    borderRadius: "30px",
                    outline: "none",
                    fontSize: "1.7em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    backgroundColor: "transparent",
                    border: "3px solid white"
                  }}
                  type="submit"
                >
                  Senden
                </button>
              </div>
            )}
          </form>
          {this.state.page >= 3 ? (
            <Button
              variant="btn-rnd transparent forward"
              onClick={this.forwardClick}
            />
          ) : (
            <Button variant="btn-rnd forward" onClick={this.forwardClick} />
          )}
        </div>
      </div>
    );
  }
}

export default ChildSignup;

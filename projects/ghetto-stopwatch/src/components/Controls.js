import React, { Component } from "react";
import { connect } from "react-redux";
import { startTimer } from "../redux";
import { stopTimer } from "../redux";
import { resetTimer } from "../redux";
// import { withToggler } from '../components/Toggler'

import maxFullScreen from "../icons/maxFullScreen.svg";
import minFullScreen from "../icons/minFullScreen.svg";

let timerId;
class Controls extends Component {
  constructor() {
    super();

    this.state = {
      status: true,
      timer: true
    };
  }

  start = () => {
    if (!timerId) {
      timerId = setInterval(this.props.startTimer, 10); // '123'
    }
    this.timerToggle();
    // this.toggle();
  };

  stop = () => {
    clearInterval(timerId);
    timerId = false;
    this.timerToggle();
    // this.toggle();
  };

  reset = () => {
    this.props.resetTimer();
  };

  timerToggle = () => {
    this.setState(prevState => {
      return {
        timer: !prevState.timer,
        status: prevState.status
      };
    });
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        status: !prevState.status,
        timer: prevState.timer
      };
    });
  };

  handleToggle(e) {
    this.setState({ isOn: !this.state.isOn });
  }

  openFullscreen = () => {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  };

  maximize = () => {
    this.openFullscreen();
    this.toggle();
  };

  minimize = () => {
    this.closeFullscreen();
    this.toggle();
  };

  render() {
    return (
      <div className="controls">
        <div className="controlWrapper">
          <div className="controlWrapper start">
            {this.state.timer ? (
              <button className="startBtn" onClick={this.start}>
                START
              </button>
            ) : (
              <button className="startBtn" onClick={this.stop}>
                STOP
              </button>
            )}
            <button className="resetBtn" onClick={this.props.resetTimer}>
              RESET
            </button>
          </div>

          <div className="controlWrapper end">
            {this.state.status ? (
              <img
                class="icons"
                src={maxFullScreen}
                alt="max screen"
                onClick={this.maximize}
              />
            ) : (
              <img
                class="icons"
                src={minFullScreen}
                alt="max screen"
                onClick={this.minimize}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { startTimer, stopTimer, resetTimer }
)(Controls);

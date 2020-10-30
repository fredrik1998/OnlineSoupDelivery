import React, { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

class StarChooser extends React.Component {
  getActiveStar = value => {
    return (this.props.stars >= value) ? " active" : "";
  }

  setStar = value => {
    this.props._onSubmit(value);
  }

  render() {
    return(
      <div>
        <div id="starfield">
        <p>How Was Your Experience?</p>
          <div
            className={ `star ${this.getActiveStar(1)}` }
            onClick={ () => this.setStar(1) }
            >
            <StarIcon className="svg_icons" aria-hidden="true"></StarIcon>
          </div>
          <div
            className={ `star ${this.getActiveStar(2)}` }
            onClick={ () => this.setStar(2) }
            >
            <StarIcon className="svg_icons" aria-hidden="true"></StarIcon>
          </div>
          <div
            className={ `star ${this.getActiveStar(3)}` }
            onClick={ () => this.setStar(3) }
            >
            <StarIcon className="svg_icons" aria-hidden="true"></StarIcon>
          </div>
          <div
            className={ `star ${this.getActiveStar(4)}` }
            onClick={ () => this.setStar(4) }
            >
            <StarIcon className="svg_icons" aria-hidden="true"></StarIcon>
          </div>
          <div
            className={ `star ${this.getActiveStar(5)}` }
            onClick={ () => this.setStar(5) }
            >
            <StarIcon className="svg_icons" aria-hidden="true"></StarIcon>
          </div>
        </div>
      </div>
    );
  }
}

class Commender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
  }

  componentWillReceiveProps(newProps) {
    let a = {
      1: "Oh. Sorry you had a bad experience ",
      2: "We will try to improve.",
      3: "Appreciate it!",
      4: "Thank you! ",
      5: "You're Awesome! "
    },
    b = newProps.rate;

    this.setState({
      rating: b,
      message: a[b]
    });
  }

  render() {
    if(this.props.rate !== 0 && this.state.message.length) {
      return(
        <div id="commender">
          <p className="commender_tit">
            You rated this { `${this.props.rate} ${(this.props.rate > 1) ? "stars" : "star"}` }
          </p>
          <p className="commender_tit">{ this.state.message }</p>
          <p className="commender_tit"> What Could We Improve?</p>
          <div className="button-container">
          <Button variant="contained">Delivery</Button>
          <Button variant="contained">Clarity</Button>
          <Button variant="contained">Price</Button>
          <Button variant="contained">Speed</Button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosedStars: 0
    }
  }

  setStar = value => {
    this.setState({ choosedStars: value });
  }

  render() {
    return(
      <div>
        
        <StarChooser stars={ this.state.choosedStars } _onSubmit={ this.setStar } />
        <Commender rate={ this.state.choosedStars } />
      </div>
    );
  }
}

export default Rating
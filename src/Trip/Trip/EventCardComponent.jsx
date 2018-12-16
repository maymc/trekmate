import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

class EventCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      dateone: null,
      monthone: null,
      timeone: null,
      tripid: null,
      userid: null,
      id: null,
      type: null,
    }
  }
  componentDidMount() {
    // console.log("Event card", this.props)
    if (this.props.date === undefined) {
      return
    }
    else {
      this.setState({
        title: this.props.title,
        tripid: this.props.detail.id,
        userid: this.props.detail.user_id,
        id: this.props.detail.id,
        type: this.props.type,
        dateone: this.props.date.date,
        monthone: this.props.date.month,
        timeone: this.props.time,
      })
    }
  }
  render() {
    // console.log("CardState", this.state)
    // let  { dateone }= this.state
    // console.log(dateone.date)

    return (
      <Link to={`/${this.state.type}/${this.state.id}?${this.state.userid}?${this.state.tripid}`}>
        <div className="card">
        <div className="cardone">
            <h3 className="inlineblock">{this.state.title}</h3>
        </div>
        <div className="cardtwo">
            <p>Details</p>
        </div>
        <div className="cardthree">
            <p className="inlineblock"><i className="spaceright fas fa-calendar-alt"></i>{this.state.monthone || "Unknown" } {this.state.dateone}</p>
            <p className="inlineblock spaceleft"><i className="far fa-clock"></i>{this.state.timeone || "Unknown" }</p>
        </div>
        </div>
        </Link>
    );
  }
}

export default EventCard;



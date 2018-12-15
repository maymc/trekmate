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
      datetwo: null,
      monthtwo: null,
      timetwo: null,
      tripid: null,
      userid: null,
      id: null,
      type: null,
    }
  }
  componentDidMount() {
    console.log("Event card", this.props)
    if (this.props.date === undefined || this.props.enddate === undefined) {
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
        datetwo: this.props.enddate.date,
        monthtwo: this.props.enddate.month,
      })
    }
  }
  render() {
    console.log("CardState", this.state)
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
            <p className="inlineblock"><i class="spaceright fas fa-plane-departure"></i>{this.state.monthone} {this.state.dateone}, 12:00 PM</p>
            <p className="inlineblock spaceleft"><i class="spaceright fas fa-plane-arrival"></i>{this.state.monthtwo} {this.state.datetwo}, 12:00 PM</p>
        </div>
        </div>
        </Link>
    );
  }
}

export default EventCard;



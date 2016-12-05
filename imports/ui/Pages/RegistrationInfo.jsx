import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';
import { compose } from 'react-komposer';

import { Tickets } from '/api/ticket/ticket.jsx';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const willPresentPoster = this.props.ticket.willPresentPoster;
    return (
      <Table>
        <thead>
          <tr>
          <th> Name </th>
          <th> Value </th>
          </tr>
        </thead>
        <tbody>
          { this.props.ticket.isKorean &&
            <tr>
              <td> Korean Name </td>
              <td> { this.props.ticket.korName } </td>
            </tr>
          }
          { this.props.ticket.isKorean &&
            <tr>
              <td> MobileNumber </td>
              <td> { this.props.ticket.mobilePhoneNum } </td>
            </tr>
          }
          { !this.props.ticket.isKorean &&
            <tr>
              <td> Nationality </td>
              <td> { this.props.ticket.nationality } </td>
            </tr>
          }
          <tr>
            <td> Last Name </td>
            <td> { this.props.ticket.engLastName }</td>
          </tr>
          <tr>
            <td> First Name </td>
            <td> { this.props.ticket.engFirstName }</td>
          </tr>
          <tr>
            <td> Affiliation </td>
            <td> { this.props.ticket.affiliation }</td>
          </tr>
          <tr>
            <td> Position </td>
            <td> { this.props.ticket.position }</td>
          </tr>
          <tr>
            <td> Advisor Name </td>
            <td> { this.props.ticket.advisorName }</td>
          </tr>
          <tr>
            <td> Poster Presentation </td>
            <td>
              { willPresentPoster ? 'Yes' : 'No' }
            </td>
          </tr>
        </tbody>
      </Table>
     )
  }
}

export class ProfileRegistrationInfo extends React.Component {
  constructor(props) {
   super(props);
  }

  render() {
    return(
      <ProfileInfo ticket={ this.props.ticket } />
    )
  }
}

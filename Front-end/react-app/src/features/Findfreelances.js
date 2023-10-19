import React, { Component } from 'react';
import axios from 'axios';

class FindFreelance extends Component {
  state = {
    freelances: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Freelances ที่คุณต้องการดึง
    axios.get('http://localhost:8081/freelances')
      .then(response => {
        this.setState({ freelances: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>รายชื่อ Freelances</h1>
        <ul>
          {this.state.freelances.map(freelance => (
            <li key={freelance.id}>
              <strong>Name:</strong> {freelance.name}<br />
              <strong>Price:</strong> {freelance.price}<br />
              <strong>Time:</strong> {freelance.time}<br />
              <strong>Description:</strong> {freelance.description}<br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FindFreelance;

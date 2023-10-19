import React, { Component } from 'react';
import axios from 'axios';

class FindJob extends Component {
  state = {
    enterprises: [],
  };

  componentDidMount() {
    // เรียก API ที่มีข้อมูล Enterprises ที่คุณต้องการดึง
    axios.get('http://localhost:8080/enterprises')
      .then(response => {
        this.setState({ enterprises: response.data });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>รายชื่อ Enterprises</h1>
        <ul>
          {this.state.enterprises.map(enterprise => (
            <li key={enterprise.id}>
              <strong>Name:</strong> {enterprise.name}<br />
              <strong>Location:</strong> {enterprise.location}<br />
              <strong>Description:</strong> {enterprise.description}<br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FindJob;

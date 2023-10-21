import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
              <strong>Price:</strong> {enterprise.price}<br />
              <strong>Time:</strong> {enterprise.time}<br />
              <strong>Description:</strong> {enterprise.description}<br />
              <Link to={`/edit/${enterprise.id}`}>Edit</Link> {/* เพิ่มลิงก์ไปยังหน้า EditJob */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FindJob;

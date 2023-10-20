import React, { Component } from 'react';
import axios from 'axios';

class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      time: '',
      description: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const jobData = {
      name: this.state.name,
      price: this.state.price,
      time: this.state.time,
      description: this.state.description,
    };

    // ทำ HTTP POST Request ไปยัง http://localhost:8080/enterprises ด้วย Axios
    axios.post('http://localhost:8080/enterprises', jobData)
      .then((response) => {
        // ทำอะไรก็ตามที่คุณต้องการหลังจากส่งข้อมูลไปยังเซิร์ฟเวอร์
        console.log('Job posted successfully!', response.data);
      })
      .catch((error) => {
        console.error('Error posting job:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Post a Job</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="text"
              name="time"
              value={this.state.time}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Post Job</button>
        </form>
      </div>
    );
  }
}

export default PostJob;

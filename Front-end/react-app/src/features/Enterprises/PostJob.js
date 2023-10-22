import React, { Component } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';


class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      time: '',
      description: '',
      type: ' '
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (
      this.state.name === '' ||
      this.state.price === '' ||
      this.state.time === '' ||
      this.state.description === '' ||
      this.state.type.trim() === ''
    ) {
      alert('Please fill in all the required fields.');
      return;
    }
    const jobData = {
      name: this.state.name,
      price: this.state.price,
      time: this.state.time,
      description: this.state.description,
      type: this.state.type
    };

    // ทำ HTTP POST Request ไปยัง http://localhost:8080/enterprises ด้วย Axios
    axios.post('http://localhost:8090/enterprises', jobData)
      .then((response) => {
        // ทำอะไรก็ตามที่คุณต้องการหลังจากส่งข้อมูลไปยังเซิร์ฟเวอร์
        console.log('Job posted successfully!', response.data);
        this.setState({
          name: '',
          price: '',
          time: '',
          description: '',
          type: '',
        });
      })
      .catch((error) => {
        console.error('Error posting job:', error);
      });
  }

  render() {
    return (
      <div >
        <Container>
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
                type="number" min="1"  
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label>Time:</label>
              <input
                type="date"
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
            <div>
              <label>Type:</label>
              <select
                name="type"
                value={this.state.type}
                onChange={this.handleInputChange}
              >
                <option value=" ">Select Type</option>
                <option value="develop">Develop</option>
                <option value="graphic">Graphic</option>
                <option value="music">Music</option>
              </select>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button variant="success" type="submit" className="custom-button" style={{width : 150}}>Submit</Button>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}



export default PostJob;

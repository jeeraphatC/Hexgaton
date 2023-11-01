import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay() {
  const [image, setImage] = useState(null);
  const imagelocation = 8; 

  useEffect(() => {
    
    axios.get(`http://localhost:2023/getByImagelocation?imagelocation=1`, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
        const imageSrc = `data:image/jpeg;base64,${base64}`;
        setImage(imageSrc);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, [imagelocation]);

  return (
    <div style={{ marginTop: 50 }}>
      {image && <img src={image} alt="Image" />}
    </div>
  );
}

export default ImageDisplay;

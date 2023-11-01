import React, { useState } from 'react';
import axios from 'axios';

function ImageUpdate() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageId, setImageId] = useState('');
  const [name, setName] = useState('');
  const [imagelocation, setImagelocation] = useState('');
  const [updateStatus, setUpdateStatus] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageIdChange = (event) => {
    setImageId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImagelocationChange = (event) => {
    setImagelocation(event.target.value);
  };

  const handleImageUpdate = () => {
    if (selectedImage && imageId) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('name', name);
      formData.append('imagelocation', imagelocation);

      axios.put(`http://localhost:2023/update?id=${imageId}`, formData)
        .then(response => {
          setUpdateStatus('Image Updated');
          console.log('Image updated successfully.');
        })
        .catch(error => {
          // Handle errors and update the status accordingly
          setUpdateStatus('Error');
          console.error('Error updating image:', error);
        });
    }
  };

  return (
    <div style={{ marginTop: 50 }}>
      <input type="file" onChange={handleImageChange} />
      <input type="text" placeholder="Image ID" value={imageId} onChange={handleImageIdChange} />
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Imagelocation" value={imagelocation} onChange={handleImagelocationChange} />
      <button onClick={handleImageUpdate}>Update Image</button>
      {updateStatus && (
        <div>
          Update Status: {updateStatus}
        </div>
      )}
    </div>
  );
}

export default ImageUpdate;

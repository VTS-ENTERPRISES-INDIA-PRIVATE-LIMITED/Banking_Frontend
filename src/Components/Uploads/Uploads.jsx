import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
import './Uploads.css';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');



const Uploads = ({onComplete}) => {
  const [panCard, setPanCard] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [panCardUrl, setPanCardUrl] = useState('');
  const [aadharCardUrl, setAadharCardUrl] = useState('');
  const [panCardPreview, setPanCardPreview] = useState('');
  const [aadharCardPreview, setAadharCardPreview] = useState('');
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  
  const handlePanCardChange = (event) => {
    const file = event.target.files[0];
    setPanCard(file);
    setPanCardPreview(URL.createObjectURL(file));
  };

  const handleAadharCardChange = (event) => {
    const file = event.target.files[0];
    setAadharCard(file);
    setAadharCardPreview(URL.createObjectURL(file));
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('panCard', panCard);
    formData.append('aadharCard', aadharCard);
    onComplete('3')
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPanCardUrl(response.data.panCardUrl);
      setAadharCardUrl(response.data.aadharCardUrl);
      message.success(`files uploaded successfully`);
      
    } catch (error) {
      console.error('Error uploading images', error);
      message.error(`files upload failed.`);
    }
  };

  return (
    <div className='upload'>
      
      
      <div className="upload-container">
        <div className="illustration">
        <img src="https://res.cloudinary.com/dsbuzlxpw/image/upload/v1719229069/cglv9lhybjskrlkdtpfx.jpg" alt="Key Carriers" className="upload-img" />
        </div>
        <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="pan-card">PAN Card:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePanCardChange}
            className="input-file"
          />
          {panCardPreview && (
            <div className="image-preview" onClick={() => handleImageClick(panCardPreview)}>
              <img src={panCardPreview} alt="PAN Card Preview" className="preview-img" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label className="label" htmlFor="aadhar-card">Aadhar Card:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAadharCardChange}
            className="input-file"
          />
          {aadharCardPreview && (
            <div className="image-preview" onClick={() => handleImageClick(aadharCardPreview)}>
              <img src={aadharCardPreview} alt="Aadhar Card Preview" className="preview-img" />
            </div>
          )}
        </div>
        <center><button type="submit" className="btn-submit">Submit</button></center>
      </form>
      
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="image-modal-overlay"
      >
        <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
        <img src={selectedImage} alt="Selected" className="modal-image" />
      </Modal>
      </div>
      </div>
      </div>
  );
};

export default Uploads;

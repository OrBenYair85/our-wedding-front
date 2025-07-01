import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

export function AddPhoto() {
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [facingMode, setFacingMode] = useState('environment');
  const navigate = useNavigate();

  // Set CSS variable --vh
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  // Lock scroll on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      if (screenshot) {
        setPhoto(screenshot);
      }
    }
  };

  const toggleCamera = useCallback(() => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  }, []);

  const videoConstraints = {
    facingMode,
  };

  return (
    <div className="camera-container">
      {!photo ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className="webcam"
          />
          <div className="button-row">
            <button onClick={capturePhoto} className="photo-button">📸</button>
            <button onClick={toggleCamera} className="photo-button">🔄</button>
            <button onClick={() => navigate('/')} className="photo-button">🏠</button>
          </div>
        </>
      ) : (
        <div className="photo-preview">
          <img src={photo} alt="Captured" className="captured-image" />
          <div className="button-row">
            <button onClick={() => setPhoto(null)} className="photo-button retake">🔄</button>
            <button onClick={() => navigate('/')} className="photo-button">🏠</button>
          </div>
        </div>
      )}
    </div>
  );
}

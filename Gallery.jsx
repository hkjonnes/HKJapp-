import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('sharedGallery');
    if (saved) setImages(JSON.parse(saved));
  }, []);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    const updated = [...images, ...newImages];
    setImages(updated);
    localStorage.setItem('sharedGallery', JSON.stringify(updated));
  };

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-3">Shared Gallery 📸</h2>
      <input type="file" accept="image/*" multiple onChange={handleUpload} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Shared ${idx}`} className="w-full h-auto rounded shadow" />
        ))}
      </div>
    </div>
  );
}

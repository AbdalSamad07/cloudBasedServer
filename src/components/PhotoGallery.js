import React from 'react';

const PhotoGallery = ({ photos }) => {
    return (
        <div className="photo-gallery">
            <h2>Recent Family Photos</h2>
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <img key={index} src={photo.src} alt={photo.alt} />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;

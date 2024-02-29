import React from 'react';

type ImageButtonProps = {
    image: string;
    onClick: () => void;
};

const ImageButton: React.FC<ImageButtonProps> = ({ image, onClick }) => {
    return (
        <button className="imageButton" onClick={onClick}>
            <img src={image} alt="Button Image" />
        </button>
    );
};

export default ImageButton;
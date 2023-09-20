import React from 'react';
import { X } from 'phosphor-react';

const CloseIcon = ({ onClick }) => {
    return (
        <div className="close-icon" onClick={onClick}>
            <X size={24} color="#000" />
        </div>
    );
};

export default CloseIcon;

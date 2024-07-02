
import React from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {product && (
          <div>
            <h2>{product.name}</h2>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="modal-image"
            />
            <p>{product.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};


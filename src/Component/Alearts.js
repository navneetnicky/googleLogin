import React from "react";
import { Alert } from "react-bootstrap";

const Alearts = ({ variant, message, onClose }) => {
  return (
    <div>
      <Alert variant={variant} onClose={onClose} dismissible>
        {message}
      </Alert>
    </div>
  );
};

export default Alearts;

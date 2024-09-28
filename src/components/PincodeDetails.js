import React from 'react';
import PincodeCard from './PincodeCard';

const PincodeDetails = ({ pincode, pincodeData }) => {
  return (
    <div className="pincode-details-container">
      <h3>Pincode: {pincode}</h3>
      {}
      <p>Message: Number of pincode(s) found: {pincodeData.length}</p>
      <div className="pincode-cards">
        {pincodeData.map((office, index) => (
          <PincodeCard key={index} office={office} />
        ))}
      </div>
    </div>
  );
};

export default PincodeDetails;

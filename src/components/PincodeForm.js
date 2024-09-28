import React from 'react';

const PincodeForm = ({ pincode, handlePincodeChange, handleSearch }) => {
  return (
    <div className="pincode-form-container">
      <h2>Enter Pincode</h2>
      <input 
        type="text" 
        value={pincode} 
        onChange={handlePincodeChange} 
        placeholder="Pincode" 
        className="pincode-input"
      />
      <button onClick={handleSearch} className="search-button">Lookup</button>
    </div>
  );
};

export default PincodeForm;

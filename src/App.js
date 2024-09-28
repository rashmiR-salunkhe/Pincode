import React, { useState } from 'react';
import PincodeForm from './components/PincodeForm';
import PincodeDetails from './components/PincodeDetails';
import './App.css';

function App() {
  const [pincode, setPincode] = useState('');
  const [pincodeData, setPincodeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchCompleted, setSearchCompleted] = useState(false); 

  const fetchPincodeData = async (pincode) => {
    setLoading(true);
    setError(null);  
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();

      if (data[0].Status === 'Success') {
        setPincodeData(data[0].PostOffice);
        setSearchCompleted(true); 
      } else {
        setPincodeData([]);
        setError('Invalid Pincode or No Data Found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching pincode details.');
    }
    setLoading(false);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSearch = () => {
    if (pincode.length === 6 && !isNaN(pincode)) {
      fetchPincodeData(pincode);
    } else {
      alert('Please enter a valid 6-digit pincode.');
    }
  };

  return (
    <div className="app">
      {!searchCompleted ? ( 
        <PincodeForm 
          pincode={pincode} 
          handlePincodeChange={handlePincodeChange} 
          handleSearch={handleSearch} 
        />
      ) : null} {}
      
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {pincodeData && (
        <PincodeDetails 
          pincode={pincode} 
          pincodeData={pincodeData} 
        />
      )}
    </div>
  );
}

export default App;

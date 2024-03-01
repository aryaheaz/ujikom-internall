import React, { useState } from 'react';

const TrainSelection = () => {
  const [selectedTrain, setSelectedTrain] = useState('');


  const handleTrainChange = (event) => {
    setSelectedTrain(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Anda telah memilih kereta: ${selectedTrain}`);
    
  };

  return (
    <div>
      <h2>Pilih Kereta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pilih kereta:
          <select value={selectedTrain} onChange={handleTrainChange}>
            <option value="">Pilih kereta...</option>
            <option value="Argo Bromo Anggrek">Argo Bromo Anggrek</option>
            <option value="Gajayana">Gajayana</option>
            <option value="Jayabaya">Jayabaya</option>
            <option value="Malabar">Malabar</option>
            <option value="Mutiara Selatan">Mutiara Selatan</option>
          </select>
        </label>
        <button type="submit">Pilih</button>
      </form>
    </div>
  );
};

export default TrainSelection;

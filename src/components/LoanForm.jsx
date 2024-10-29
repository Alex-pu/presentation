
import React, { useState } from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    duration: '',
        // school: '', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Loan application submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <h2>Loan Application Form</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Loan Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      </label>
      <label>
        Duration (Months):
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
      </label>
          {/* 

      <label>
        School:
        <input type="text" name="school" value={formData.school} onChange={handleChange} />
      </label>
      */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanForm;

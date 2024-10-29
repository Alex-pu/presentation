import React, { useState } from 'react';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    duration: '',
    // Additional details placeholder
    // details: '', // Uncomment to add more details to the form
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
      Uncomment the following block to add additional details field to the form

      <label>
        Additional Details:
        <input type="text" name="details" value={formData.details} onChange={handleChange} />
      </label>
      */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanForm;

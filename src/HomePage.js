import React from "react";
import { useFormContext } from './FormContext';
import Form from './form';
import './Form.css';

function HomePage() {
  const { data, showForm, setShowForm } = useFormContext();

  return (
    <div className="homepage">
      <h1 className="homepage-title">Home Page</h1>
      <button onClick={() => setShowForm(true)} className="homepage-add-button">Add</button>
      <div role="region" aria-labelledby="caption" tabIndex="0" className="homepage-table-container">
        <table className="homepage-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Repeat Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <th>{row.firstName}</th>
                <td>{row.lastName}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.repeatPassword}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="homepage-modal">
          <div className="homepage-modal-content">
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

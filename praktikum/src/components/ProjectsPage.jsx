import React, { Fragment, useEffect, useState} from "react";
import ProjectList from "./ProjectList";
import projectAPI from './projectAPI';
import Project from "./Project";

function TicketBooking() {
    const [formData, setFormData] = useState({
      name: '',
      destination: '',
      date: '',
    });
  
    const [bookingResponse, setBookingResponse] = useState(null);
    const [error, setError] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false); 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://example.com/book-ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setBookingResponse(data);
        setBookingSuccess(true); 
      } catch (error) {
        setError('Terjadi kesalahan saat memproses permintaan.');
        console.error('Error:', error);
      }
    };
  
    return (
      <div>
        <h2>Book Your Ticket</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Destination:
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <button type="submit">Book Ticket</button>
        </form>
        {error && <p>{error}</p>}
        {bookingSuccess && bookingResponse && ( 
          <div>
            <h3>Booking Confirmation:</h3>
            <p>Nama: {bookingResponse.name}</p>
            <p>Destinatinasi: {bookingResponse.destination}</p>
            <p>Tanggal: {bookingResponse.date}</p>
            {}
          </div>
        )}
      </div>
    );
  }
  
  export default TicketBooking;
// components/Calendar.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => handleDateChange(date)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
      className=' text-black'
      style={{
        
        border: '1px solid #ced4da',
        borderRadius: '5px',
        padding: '8px',
        cursor: 'pointer',
        width: '150px' // Adjust width as needed
      }}
    />
  );
};

export default Calendar;

import React, { useState, useEffect } from 'react';

const Jadwal_Keberangkatan = () => {
  const [schedule, setSchedule] = useState([
    { trainName: 'Argo Parahyangan', time: '08:00', destination: 'Jakarta' },
    { trainName: 'Serayu', time: '09:30', destination: 'Bandung' },
    { trainName: 'Gajayana', time: '11:00', destination: 'Surabaya' },
    { trainName: 'Malioboro Express', time: '13:00', destination: 'Yogyakarta' },
    { trainName: 'Argo Bromo', time: '20:00', destination: 'Solo' },
    { trainName: 'Argo Wilis', time: '12:25', destination: 'Purwokerto' },
    { trainName: 'Serayu Malam', time: '23:30', destination: 'Bandung' },
    { trainName: 'Cirebon Express', time: '21:00', destination: 'Cirebon' },
    { trainName: 'Malioboro Express', time: '13:00', destination: 'Yogyakarta' },  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSchedule = schedule.map(train => ({
        ...train,
        time: generateRandomTime(),
      }));
      setSchedule(newSchedule);
    }, 5000); 

    return () => clearInterval(interval);
  }, [schedule]);

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  return (
    <div>
      <h1>Jadwal Keberangkatan</h1>
      <table>
        <thead>
          <tr>
            <th>   Nama Rangkaian Kereta</th>
            <th> Waktu</th>
            <th>   Tujuan</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((train, index) => (
            <tr key={index}>
              <td>{train.trainName}</td>
              <td>{train.time}</td>
              <td>{train.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jadwal_Keberangkatan;

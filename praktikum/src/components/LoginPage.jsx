// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div>
//       <h2>Halaman Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username} // Ikatan nilai input dengan state username
//             onChange={(e) => setUsername(e.target.value)} // Perbarui state username saat nilai input berubah
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password} // Ikatan nilai input dengan state password
//             onChange={(e) => setPassword(e.target.value)} // Perbarui state password saat nilai input berubah
//           />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
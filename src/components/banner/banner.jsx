// import React, { useState, useEffect } from 'react';
// import './banner.css'

// const Regis = () => {
    
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
//       const [registrationSuccess, setRegistrationSuccess] = useState(false);
   

//   useEffect(() => {
//     if (name && !/^[a-zA-Z ,.]+$/.test(name)) {
//       setNameError('Name must contain only letters');
//     } else {
//       setNameError('');
//     }
//   }, [name]);

//   useEffect(() => {
//     if (email && !/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Invalid email format');
//     } else {
//       setEmailError('');
//     }
//   }, [email]);

//   useEffect(() => {
//     if (password && !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
//       setPasswordError('Password must have at least one uppercase, one lowercase, one number, and one special character');
//     } else {
//       setPasswordError('');
//     }
//   }, [password]);

//   useEffect(() => {
//     if (confirmPassword && confirmPassword !== password) {
//       setConfirmPasswordError('Passwords do not match');
//     } else {
//       setConfirmPasswordError('');
//     }
//   }, [confirmPassword, password]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!nameError && !emailError && !passwordError && !confirmPasswordError && name && email && password && confirmPassword) {
    
//       setRegistrationSuccess(true);
//       setTimeout(() => {
        
//         window.location.reload();
//       }, 2000);
//     } 
//   };

//   return (
//       <div id='whole'>
//           <h2>Registraction Form</h2>
//       {!registrationSuccess ? (
//         <form onSubmit={handleSubmit}>
//                   <div className={nameError ? 'inputerror' : ''} >
                      
//             <label >Name:</label>
//             <input type="text" id="name" onChange={(e) => setName(e.target.value)} nameError/>
//             {nameError && <span className='tex'>{nameError}</span>}
//                   </div>
                  
//           <div className={emailError ? 'inputerror' : ''} >
//             <label >Email:</label>
//             <input  type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
//             {emailError && <span className='tex'>{emailError}</span>}
//           </div>
//           <div className={passwordError ? 'inputerror' : ''} >
//             <label >Password:</label>
//             <input type="text" id="password" onChange={(e) => setPassword(e.target.value)}/>
//             {passwordError && <span className='tex'>{passwordError}</span>}
//           </div>
//           <div  className={confirmPasswordError ? 'inputerror' : ''}>
//             <label >Confirm Password:</label>
//                       <input type="text" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
//             {confirmPasswordError && <span className='tex'>{confirmPasswordError}</span>}
//           </div>
//           <button type="submit" id='but'>Register</button>
//         </form>
//       ) : (
//         <div>
//           <p>Registration successful!</p>
         
//         </div>
//       )}
//     </div>
//   );
// };

// export default Regis;
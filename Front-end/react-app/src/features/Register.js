// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';


// function Regis({ className }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [cardNumber, setcardNumber] = useState('');
//     const [email, setEmail] = useState('');


//     return (
//         <div className={className}>
//             <h2>Register</h2>
//             <form>
//                 <div>
//                     <label>Eamil:</label>
//                     <input
//                         type="text"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>CardNumber:</label>
//                     <input
//                         type="text"
//                         value={cardNumber}
//                         onChange={(e) => setcardNumber(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <Link to="/nextpage">
//                     <button type="button">Register</button>
//                 </Link>

//             </form>

//         </div>
//     );
// }

// Regis.propTypes = {
//     className: PropTypes.string.isRequired,
// };

// export default styled(Regis)`
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 4rem 0;
// `;

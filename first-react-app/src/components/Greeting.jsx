
// import React, { useState } from 'react';

// const Greeting = ({ children }) => {
//   const [name, setName] = useState('');
//   const [greetingText, setGreetingText] = useState('Hello World');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleButtonClick = () => {
//     setGreetingText(name ? `Hello ${name}` : 'Hello World');
//   };

//   return (
//     <div>
//       <form>
//         <label>
//           Enter your name: 
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//       </form>
      
//       <p>{greetingText}</p>
//       {children && <div>{children}</div>}
      
//       <button onClick={handleButtonClick}>Update Greeting</button>
//     </div>
//   );
// };

// export default Greeting;



const Greeting = ({
    name, children
}) => {
  return (
    <div>
      {children ? children:`Hello ${name||'Random User'}`}
    </div>
  )
}

export default Greeting
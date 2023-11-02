import Cookies from 'js-cookie';

const removeAllCookies = () => {
  // Get an array of all the cookie names
  const allCookieNames = Object.keys(Cookies.get());

  // Loop through the cookie names and remove them
  for (let i = 0; i < allCookieNames.length; i++) {
    Cookies.remove(allCookieNames[i]);
  }
};

export default removeAllCookies;



// import Cookies from 'js-cookie';

// function removeAllCookies() {
//     const cookies = document.cookie.split(";");
  
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i];
//       const eqPos = cookie.indexOf("=");
//       const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
//       document.cookie = name ;
//     }
//   }
  
//   export default removeAllCookies ;
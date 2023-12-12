// import { GoogleLogout } from 'react-google-login';

// const clientID = "83462729097-b6itqhahbjgjugbskefr174o82a0s4v9.apps.googleusercontent.com"

// function Logout() {

//   const onSuccess = (res) => {
//     console.log("LOGOUT SUCCESSFUL!");
//   }

//   return(
//     <div id="singOutButton">
//       <GoogleLogout
//         clientID={clientID}
//         buttonText="Logout"
//         onSuccess={onSuccess}
//       />
//     </div>
//   )
// }

// export default Logout;


import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


function Logout() {
  return(
    <div>
      <GoogleOAuthProvider clientId="<83462729097-b6itqhahbjgjugbskefr174o82a0s4v9.apps.googleusercontent.com>">
        <GoogleLogin  
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
        />;
      </GoogleOAuthProvider>;
    </div>
  );
}

export default Logout;
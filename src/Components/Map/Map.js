// import React from 'react'
// import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const location = {
//   lat:  23.807151,
//   lng:90.413916
// };

// const onLoad =marker=>{
//     console.log('marker',marker);
// }

// function Map() {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyDo92Jucxzg5yMQObSEESls67ozyZeMfdw"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={location}
//         zoom={10}
//       >
//       <Marker
//           onLoad={onLoad}
//           position={location}
//       />
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(Map)
import React, { useState } from 'react'
import { GoogleMap, LoadScript,DirectionsService,DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '400px'
};

const location = {
  lat:  23.807151,
  lng:90.413916
};

const onLoad =marker=>{
    console.log('marker',marker);
}

function Direction({origin,destination}) {
const [directionResponse,SetDirectionResponse] = useState(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDo92Jucxzg5yMQObSEESls67ozyZeMfdw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
     
     {
       origin !== '' && destination !=='' && <DirectionsService
       // required
       options={{
         destination: destination,
         origin: origin,
         travelMode:'Driving'
       }}
       // required
       callback={res=>{
           if(res !==null){
               SetDirectionResponse(res);
           }
       }}
      
     />
     }
           {
             directionResponse && <DirectionsRenderer
             // required
             options={{ 
               directions: directionResponse
             }}
             />
            
           }

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)
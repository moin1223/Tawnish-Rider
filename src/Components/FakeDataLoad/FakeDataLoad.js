import React from 'react';
import FakeData from '../../FakeData/FakeData';
import SingleVehicle from '../SingleVehicle/SingleVehicle';


const FakeDataLoad = () => {
    return (
      
        
    <div class="container-fluid homepage-bgimage">
   
    <div className="d-flex justify-content-centers ">
    {
      FakeData.map(td=><SingleVehicle data={td}></SingleVehicle>)
    }
    </div>

    </div>



    );
};

export default FakeDataLoad;
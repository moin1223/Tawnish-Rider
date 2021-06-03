import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleVehicle.css';




const SingleVehicle= (props) => {
    const {id,name,image} = props.data;
   
    const imageStyle = { height: '150px', width: '150px' }



    return (

        
        <div className="col-md-3 p-3  col-lg-3 col-sm-12 singleVehicle" >
            <Card style={{ width: '18rem' }}>
            
            <Link to={`search/${id}`} className="singleVehicle" >
            <Card.Body>
            <Card.Img style={imageStyle} variant="top" src={image} />
                <Card.Title>{name}</Card.Title>
                
            </Card.Body>

            </Link>
        </Card>

       </div>
      



    );
};

export default SingleVehicle;
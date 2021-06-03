import './Search.css';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData'
import map from '../../images/map.png'

const Search = () => {
    const {id}=useParams();
    const data=FakeData.find(td=>td.id==id);
    console.log(data);
    return (
        <div className="row">

         <div className="col-md-6 search">
           <p>{data.name}</p>
           <h6>Pick from</h6>
           <input type="text" placeholder="Dhaka"/>
           <br/>
           <h6>Pick to</h6>
           <input type="text" placeholder="Chittagong"/>
           <br/>
          <Link to ={`/searchResult/${data.id}`}>
          <button class="btn btn-primary">Search</button>
          </Link>
           
         </div>

         <div className="col-md-6">

         <img  src={map} alt="e" />
         </div>
            
        </div>
    );
};

export default Search;
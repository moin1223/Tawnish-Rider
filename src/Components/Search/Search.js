import './Search.css';
import React, {useState} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData'
import map from '../../images/map.png'
import Direction from '../Map/Direction';

const Search = () => {
    const [origin,setOrgin] = useState('')
    const [destination,setDestination] = useState('');
    const {id}=useParams();
    const data=FakeData.find(td=>td.id==id);
    console.log(data);
    return (
        <div className="row">

         <div className="col-md-6 search">
           <p>{data.name}</p>
           <h6>Pick from</h6>
           <input type="text" placeholder="Starting From" onBlur={e=>setOrgin(e.target.value)}/>
           <br/>
           <h6>Pick to</h6>
           <input type="text" placeholder="Going to" onBlur={e=>setDestination(e.target.value)}/>
           <br/>
           <h6>Date</h6>
           <input type="text" placeholder="00/00/0000"/>
           <br/>
          <Link to ={`/searchResult/${data.id}`}>
          <button class="btn btn-primary">Search</button>
          </Link>
           
         </div>

         <div className="col-md-6">
             <Direction orgin={origin} destination={destination}></Direction>

         {/* <img  src={map} alt="e" /> */}
         </div>
            
        </div>
    );
};

export default Search;
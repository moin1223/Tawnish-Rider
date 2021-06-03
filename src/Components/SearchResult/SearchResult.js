import './SearchResult.css';
import React from 'react';
import { useParams } from "react-router-dom"
import FakeData from "../../FakeData/FakeData"
import map from '../../images/map.png'


const SearchResult = () => {
    const { id } = useParams();
    const data = FakeData.find(td => td.id == id)
    return (


        <div className="row">
            <div className=" col-md-6 searchReselt">

                <h6>{data.name}</h6>
                <img className="img-fluid" src={data.image} alt="" />
            </div>
            <div className="col-md-6">

                <img src={map} alt="e" />

            </div>

        </div>

    );
};

export default SearchResult;
import React from "react";
import "./search.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from "react";
import axios from "axios";
function Search(){
    let FlightSearchService = class FlightSearchService {
        constructor(Http) {
            this.Http = Http;
            this.FlightSearchApi = 'http://localhost:9001/flight/find/';
        }
        GetFlights(from_location, to_location,flightDate) {
            return this.Http.get(this.FlightSearchApi + from_location + "/" + to_location+ "/"+ flightDate);
        }
    };
    
    const [user, setUser]=useState({
    
        from_location:"",
        to_location:"",
        flightDate: "",
       
    });

   
   const{from_loaction,to_location,flightDate}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };


   /* const onSubmit=async (e)=> {
        e.preventDefault();
        await axios.post("http://localhost:8888/flight/add", user);
        navigate("/flight/findall")
    };
    */
    let getUser = (registerdata) => {
        console.log(registerdata);
       
      
        axios
          .get(`http://localhost:8888/flight/find/${from_loaction}/${to_location}/${flightDate}`)
          .then((res) => console.log(res.data));
      };
      

    return(
        

        <div className="img7">
        <div class="cardd p-4 mt-5" id="c1">
        <div class="row g-3">
            <div class="col-12 mb-4">
                <h4 id="up">Flight Search</h4>
                <span class="text-muted">Fly anywhere. Fly everywhere</span>
            </div>
            <div class="col-lg-5">
                <div class="form-floating">
                    
                     <select class="form-control">
                     <input type="text" class="form-control" placeholder="FLYING TO"/>
                     <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
                     <option value="Kakinada">Kakinada</option>
                     <option value="Bangalore">Bangalore</option>
                     <option value="Chennai">Chennai</option>
                     <option value="Delhi">Delhi</option>
                     <option value="Hyderabad">Hyderabad</option>
                     <option value="Chennai">Chennai</option>
                     <option value="Vizag">Vizag</option>
                     <option value="Goa">Goa</option>
                     </select>
                    
                    
                    <label>FLYING FROM</label>
                </div>
            </div>
           
            
            
            <div class="col-lg-5">
                <div class="form-floating">
                    
                     <select class="form-control">
                     <input type="text" class="form-control" placeholder="FLYING TO"/>
                     <option value="Select Location"><span class="text-muted">--Select Location--</span></option>
                     <option value="Hyderabad">Hyderabad</option>
                     <option value="Chennai">Chennai</option>
                     <option value="Vizag">Vizag</option>
                     <option value="Goa">Goa</option>
                     <option value="Kakinada">Kakinada</option>
                     <option value="Bangalore">Bangalore</option>
                     <option value="Chennai">Chennai</option>
                     <option value="Delhi">Delhi</option>
                     </select>
                    
                    
                    <label>FLYING TO</label>
                </div>
            </div>
            <div>
            <div class="col-lg-5" >
                <div class="form-floating">
                    <input type="date" class="form-control" placeholder="DEPART ON"/>
                    <label>DEPART ON</label>
                    </div>
                </div>

                
       
           
            </div >
            
            <div class="button">
             
                
                <Link to="/result"
                ><button class="btn btn-primary text-uppercase" type="submit">SEARCH FLIGHTS<i class="fa fa-plane ms-3"></i></button></Link>
            </div>
        </div>
    </div>
    </div>

    );
}
export default Search;
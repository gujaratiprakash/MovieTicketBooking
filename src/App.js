import './App.css';
import TicketList from './components/TicketList';

import React, {useState} from 'react'

function App() {
  const [seats, setSeats] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
  const [seats2, setSeats2] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
  const [seats3, setSeats3] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
  const [seats4, setSeats4] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,54,55,56,57,14,15,16,17,18,19,20,21,22,23,24]);
  const clubspace = [4,18]
  const captainrow=["B","C","D","E","F","G","H"];
  const crewrow1=["I","J"];
  const crewrow2=["K","L","M","N","O"];
  const crewwmpty=[54,55,56,57];
  const captainspace = [12,20]
  const crewspace=[12,16]

  const [booked,setBooked] = useState([
    {
        "row":"A",
        "seat": 5,
        "name": "Prakash Gujarati",
        "age":"33",
        "price":"330",
        "status":"booked"
      }
  ])

  // const [bookingdetail, setBookingDetail] =  useState([
  //   {
  //       "name": "Prakash Gujarati",
  //       "age":"33",
  //       "price":"330",
  //     }
  // ])

    function booking(e){
      //console.log(e.target.name,e.target.value)
        // if(e.target.name=="name"){
        //   let tempdata = [{ ...booked }];
        //   tempdata.name += e.target.value;
        //   setBooked([...tempdata])
        // }
        // if(e.target.age=="age"){
        //   let tempdata = { ...booked };
        //   tempdata.age += e.target.value;
        // }
        // if(e.target.price=="price"){
        //   let tempdata = { ...booked };
        //   tempdata.price += e.target.value;
        // }       

    }

    function showBooking(){
        console.log(booked)      
    }

  return (
    <>
      <h1 className='text-center '>Movie Ticket Booking System</h1>
      <span className='' style={{paddingLeft:"110px"}}>CLUB-Rs. 330.00</span>
      <div className='px-5'><hr></hr></div>
      
      <div className="row">
        <TicketList booked={booked} setBooked={setBooked} name="club" price="330" empty="" row="A" space={clubspace} seats={seats} />
        {
          <>
           <span className='mt-3' style={{paddingLeft:"110px"}}>CAPTAIN-Rs. 230.00</span>
           <div className='px-5'>
      <hr></hr>
      </div>
         {
          captainrow.map(function(item,index){
            return(
          <TicketList booked={booked} setBooked={setBooked} name="captain" price="230" row={item} empty="" space={captainspace} seats={seats2}  />
            )
          })
        }
         <span className='mt-3'style={{paddingLeft:"110px"}}>CREW-Rs. 200.00</span>
         <div className='px-5'>
      <hr></hr>
      </div>
         {
          crewrow1.map(function(item,index){
            return(
          <TicketList booked={booked} setBooked={setBooked} name="captain"
            price="200" row={item} empty="" space={captainspace} seats={seats3}  />
            )
          })
        }
        {
          crewrow2.map(function(item,index){
            return(
          <TicketList booked={booked} setBooked={setBooked} name="captain"
            price="150" row={item} empty={crewwmpty} space={crewspace} seats={seats4}  />
            )
          })
        }
            </>
        }
        </div>
        <div style={{position:"absolute",top:"30px",right:"0px",width:"400px"}}>
          <div className='card'>
              <div className='card-body'>
                <h4 className='text-center'>Booking Details</h4>
              </div>
              <div className='card-body'>
                {
                  booked.map(function(item, index){
                    return (<div key={index} className='row'>
                    <div className='col-md-4'>
                      <div className="mb-3">              
                          <input type="text" className="form-control" name="name" onChange={(event)=>booking(event)} placeholder='name' />              
                        </div>
                        </div>          
                    <div className='col-md-4'>
                      <div className="mb-3">              
                          <input type="number" className="form-control" name="age"  onChange={(event)=>booking(event)} value={item.age} placeholder='age' />              
                        </div>
                    </div>
                    <div className='col-md-4'>
                      <div className="mb-3">              
                          <input type="number" className="form-control" name="price"  onChange={(event)=>booking(event)} value={item.price} placeholder='price' />              
                        </div>
                    </div>        
                  </div>)
                  })
                }
                <div><button type='button' className='btn btn-primary' onClick={showBooking}>Sumbit</button></div>
                </div>              
          </div>
        </div>
        </>
  );
}
export default App;

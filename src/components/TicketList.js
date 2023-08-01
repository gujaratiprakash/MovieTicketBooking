import React, {useState} from 'react'

export default function TicketList(props) {
  const {setBooked, booked} = props;
  function isSeatBooked(row, seat) {
    for (let i = 0; i < booked.length; i++) {
      if (booked[i].row === row && booked[i].seat === seat) {
        return true;
      }
    }
    return false;
  }

  function booking(row, seat, price){
    console.log(row,seat, price)
    setBooked(
      [
        ...booked,
        {
          "row":row,
          "seat":seat,
          "name": "Prakash Gujarati",
          "age":"33",
          "price":price,
          "status":"hold"
        }
      ]
    )
  }

  return (
    <>
      <div className='col-1 mt-1' style={{paddingLeft:"120px"}}>
     {props.row}
      </div>
      <div className='col-11 mt-1'>
        {
            props.seats.map((seat, index) => {
                return (
                  //index == space[0] || index == space[1] ? <span className='ms-5'></span> : <button className='btn btn-outline-success rounded-1 mx-1' style={{height:'30px',width:'30px',fontSize:'10px'}}>{index+1}</button>                
                 props.empty.includes(seat) ? <button className='btn btn-outline-success rounded-1 mx-1' 
                 style={{visibility:"hidden", height:'30px',width:'30px',fontSize:'10px'}}>a{seat}</button>
                  :
                  props.space.includes(seat)  ? <span className='ms-5'><button className='btn btn-outline-success rounded-1 mx-1' 
                  style={{height:'30px',width:'30px',fontSize:'10px'}}>a{seat}</button></span> 
                   : 
                  <button onClick={()=>booking(props.row, seat, props.price)} className={`btn btn-outline-success rounded-1 mx-1 ${ isSeatBooked(props.row, seat) ? 'bg-success': ''}`} style={{height:'30px',width:'30px',fontSize:'10px'}}>
                    {seat}</button>          
                )}
            )} 
            </div>
            

            </>    
  )
}

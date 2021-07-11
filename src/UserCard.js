import React from 'react'

const UserCard = ({user}) => {
    return (
        
       <div>
     
      <h2>{user.name}</h2>
      <h4 style={{marginTop:"2px",color:"white"}}>{user.username}</h4>
      <div style={{marginTop:"-2px"}} className="size" >
        <h3>E-mail :</h3>
        <span>{user.email}</span>
      </div>
      <div style={{marginLeft:"2px"}} className="color">
        <h3>Phone : {user.phone} </h3>
        <span style={{color:"white",background:"none",fontSize:"12px"}}>{user.phone.split('-').join('.')}</span>
      </div>
      <a href="#">Contact</a>
    </div>
        
    )
}

export default UserCard
 
import React from 'react'
import Nav from '../components/Nav'




function DashBoard(props) {
  return (
    <div style={{display:'flex',height:"100%"}}>
       <div style={{width:"30%",height:"100%", backgroundColor:'greenyellow',position:'sticky',top:'0',left:"0", textAlign:'left',paddingLeft:"5%",}}>
           <Nav/>
       </div>
       <div style={{padding:"5%"}}>
           {props.children}
       </div>
    </div>
  )
}

export default DashBoard
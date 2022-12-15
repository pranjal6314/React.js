import React from 'react'
import './feature.css'
import {flist} from './feature_list'
function features() {
  return (
    <>
    
    <div>
        <h1>Api</h1>
        <div className='main'>
            {flist.map((item,index)=>{
                return(
                   
                    <div className='container' key={index}>
                        <i className={item.picon} style={{width:"50px",height:"50px",backgroundColor:"red"}}></i>
                        <h3>{item.ptitle}</h3>
                        <p>{item.ptext}</p>
                    </div>
                   
                    
                )
            })
        }
         </div>
        
    </div>
    </>
  )
}

export default features

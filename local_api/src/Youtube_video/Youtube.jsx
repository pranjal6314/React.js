import React from 'react'
import {data} from './Youtube_list'
const Youtube = () => {

    <>
    <div>
      <h1>hello welcome to Youtube</h1>
    </div>
    <div>
    {data.map((item,index)=>{
                return(
                   
                    <div className='' key={index}>
                      <h1>{item.name}</h1>
                    </div>
                   
                    
                )
            })
        }
    </div>
    </>
  
}

export default Youtube

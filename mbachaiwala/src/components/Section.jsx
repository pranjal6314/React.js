import React from 'react'

function Section(props) {
    return <section className='section' style={{backgroundColor :props.backgroundColor}}>
        <div>
                <h3 style={{color:props.headingColor}}>{props.h3}</h3>
                <p style={{color:props.textColor}}>{props.p}</p>
                {props.hasBtn && <button style={{color:props.btnColor,backgroundColor:props.btnbgColor}}>{props.btntext}</button>}
                <div>
                    <img src={props.imgSrc} alt="ImgSrc" style={{width:props.imgSize}}/>
                </div>
        </div>
    </section>
}

export default Section

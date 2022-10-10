import React from 'react'

function Footer() {
    const footerLinks=(Element)=>{
        const allfooterLinks=document.querySelectorAll(".footerLinks");
            switch (Element) {
                case 0:
                    allfooterLinks.forEach((item, index) =>
                        index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
                case 1:
                    allfooterLinks.forEach((item, index) =>
                        index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
                case 2:
                    allfooterLinks.forEach((item, index) =>
                        index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
                case 3:
                    allfooterLinks.forEach((item, index) =>
                        index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
                case 4:
                    allfooterLinks.forEach((item, index) =>
                        index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
                case 5:
                    allfooterLinks.forEach((item, index) =>
                        index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
                        );
                    
                    break;
            
                default:
                    allfooterLinks.forEach((item) =>(item.style.opacity = 1) 
                        );
                    break;
            }
    }
  return (
   <>
        <footer>
            <h1>Let's
            <br />
            #ConnectOnCutting?</h1>
            <aside>
                <a onMouseOver={()=>footerLinks(0)} href="/"className='footerLinks'>Home</a>
                <a onMouseOver={()=>footerLinks(1)} href="/story"className='footerLinks'>Story</a>
                <a onMouseOver={()=>footerLinks(2)} href="/media"className='footerLinks'>Media</a>
                <a onMouseOver={()=>footerLinks(3)} href="/franchise"className='footerLinks'>Franchise</a>
                <a onMouseOver={()=>footerLinks(4)} href="/events"className='footerLinks'>Events</a>
                <a onMouseOver={()=>footerLinks(5)} href="/chaiwalacares"className='footerLinks'>Chai Wala Cares</a>
            </aside>
            <div>
                <h5>Email</h5>
                <a href="mailto : pranjlachoudhary@gmail.com">pranjlachoudhary@gmail.com</a>
                <a href="mailto : Info@mbachaiwala.com">  Info@mbachaiwala.com</a>
            </div>
            <div>
                <h5>Phone</h5>
                <a href="tel : +91 9571834213">9571834213</a>
            </div>
            <p>©COYPRIGHT 2022 MBA-CHAIWALA . </p>
        </footer>
        <div className='footer'></div>
   </>
  )
}

export default Footer

import React from 'react'

function Contact() {
  return (
    
    <>
      <div className='container'>
        <br />
        <h6 style={{textAlign:"center"}}>PLUM COSMETICS GROUP</h6>
        <h1 style={{textAlign:"center"}}>CONTACT US</h1>
        <h6>ONLINE INQUIRY</h6>
        <br />

        <div className='row'>
          
          <div className='col-lg-6'>
            <label>Name</label>
            <input type="text" name="name" className='form-control' />
            <label>E-mail</label>
            <input type="text" name="email" className='form-control' />
            <label>Phone</label>
            <input type="text" name="phone" className='form-control' />
            <label>Message</label>
            <textarea className='form-control'/>
          </div>

         
          <div className='col-lg-6'>
            <img src="https://i.pinimg.com/originals/b5/ff/90/b5ff90a133ee4c5c490378b25271a479.jpg" alt="Contact Us" className='img-fluid' style={{ height: '500px', width: '100%'}}/>
          </div>
        </div>
      </div>
    </>
  );
}
  

export default Contact

import React from 'react'

function Products() {
  return (
    <div className='container'>
      <h1  style={{textAlign:"center"}}>FAST SELLING PRODUCTS </h1>
      <br />
    <div className='row'>
      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://image.harrods.com/estee-lauder-pure-colour-matte-lipstick_19808003_44526167_2048.jpg" 
      class="card-img-top"  
      style={{ height: '300px', width: '100%', objectFit: 'cover' }}/>
      <div class="card-body">
      <h5 class="card-title">Lipstick</h5>
      <p class="card-text"> Matte Luxe Lipstick </p>
      <h5 class="card-text">$11.6</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>

      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://th.bing.com/th/id/OIP.0gbi_ErEBgHKu08KyJ0u4QHaHa?rs=1&pid=ImgDetMain" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }}/>
      <div class="card-body">
      <h5 class="card-title">Eye Shadow</h5>
      <p class="card-text">Naked Pallet 3 </p>
      <h5 class="card-text">$29.8</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>

      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://i.pinimg.com/originals/b1/70/80/b17080f5ceb3bedf9a7bc69e393295bf.jpg" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Nail Polish</h5>
      <p class="card-text">Glitter Nail Enamel </p>
      <h5 class="card-text">$7.3</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>

      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://th.bing.com/th/id/OIP.ykUmdfJ0GQbPRLYV8cA8KAHaHa?w=742&h=742&rs=1&pid=ImgDetMain" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Primer</h5>
      <p class="card-text">3 in 1 Long Lasting Primer </p>
      <h5 class="card-text">$15</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>
      
      <div className='row mt-5'>
      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://i5.walmartimages.com/asr/72984064-a515-4d0f-8746-803fbaa6f8ed.ff3842fafc5ab8c4fe45c01bfafd72f8.jpeg" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Eye Liner</h5>
      <p class="card-text">Waterproof liquid Eyeliner </p>
      <h5 class="card-text">$5.2</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>

      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://th.bing.com/th/id/OIP.mXWyRd2clc5Voe-Ca4EieAHaIo?w=180&h=210&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Compact</h5>
      <p class="card-text">Perfect Matte Compact </p>
      <h5 class="card-text">$30</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>

      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://th.bing.com/th/id/OIP.JQoCkMp9ZHojV5NxCKVBTQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Blush</h5>
      <p class="card-text">Luminous Putty Blush </p>
      <h5 class="card-text">$42.7</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>
      
      <div className='col-lg-3'>
      <div class="card" style={{ width:'18rem'}}>
      <img src="https://th.bing.com/th/id/OIP.v8hzrrB8iD0cPXIWSO5BtQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.4&pid=1.7" 
      class="card-img-top" 
      style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
      <div class="card-body">
      <h5 class="card-title">Hair Serum</h5>
      <p class="card-text">Frizzy Control Serum </p>
      <h5 class="card-text">$19.9</h5>
      <a href="#" class="btn btn-danger">Add to Cart</a>
      </div>
     </div> 
      </div>


    </div>
    </div>
    </div>
  )
}

export default Products

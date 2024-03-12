import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Import Bootstrap JavaScript
import './home.css';
import dress from './images/dress.jpg';
import accessories from './images/accessories.jpg';
import skin from './images/skin.jpg';
import item1a from "./images/item1/item1a.jpg";
import item1b from "./images/item1/item1b.jpg";
import item1c from "./images/item1/item1c.jpg";
import item1d from "./images/item1/item1d.jpg";
import item2a from "./images/item2/item2a.jpg";
import item2b from "./images/item2/item2b.jpg";
import item2c from "./images/item2/item2c.jpg";
import item2d from "./images/item2/item2d.jpg";
import item3a from "./images/item3/item3a.jpg";
import item3b from "./images/item3/item3b.jpg";
import item3c from "./images/item3/item3c.jpg";
import item3d from "./images/item3/item3d.jpg";
import item4a from "./images/item4/item4a.jpg";
import item4b from "./images/item4/item4b.jpg";
import item4c from "./images/item4/item4c.jpg";
import item4d from "./images/item4/item4d.jpg";
import item5a from "./images/item5/item5a.jpg";
import item5b from "./images/item5/item5b.jpg";
import item5c from "./images/item5/item5c.jpg";
import item5d from "./images/item5/item5d.jpg";
import item6a from "./images/item6/item6a.jpg";
import item6b from "./images/item6/item6b.jpg";
import item6c from "./images/item6/item6c.jpg";
import item6d from "./images/item6/item6d.jpg";
import item7a from "./images/item7/item7a.jpg";
import item7b from "./images/item7/item7b.jpg";
import item7c from "./images/item7/item7c.jpg";
import item7d from "./images/item7/item7d.jpg";
import item8a from "./images/item8/item8a.jpg";
import item8b from "./images/item8/item8b.jpg";
import item8c from "./images/item8/item8c.jpg";
import item8d from "./images/item8/item8d.jpg";
import item9a from "./images/item9/item9a.jpg";
import item9b from "./images/item9/item9b.jpg";
import item9c from "./images/item9/item9c.jpg";
import item9d from "./images/item9/item9d.jpg";
import deal1 from './images/deals/deal1.jpg';
import deal2 from './images/deals/deal2.jpg';
import deal3 from './images/deals/deal3.jpg';
import deal4 from './images/deals/deal4.jpg';
import deal5 from './images/deals/deal5.jpg';
import deal6 from './images/deals/deal6.jpg';
import deal7 from './images/deals/deal7.jpg';
import deal8 from './images/deals/deal8.jpg';
import deal9 from './images/deals/deal9.jpg';
import deal10 from './images/deals/deal10.jpg';

export default function Home() {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/Home")
  };
  const product = () => {
    navigate("/Product")
  };
  const cart = () => {
    navigate("/Cart")
  };
    return (
        <div className='home' id="home">
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" aria-controls="mynavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-to6gler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={Home}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  href="#Footer">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Footer">Contact</a>
                        </li>
                    </ul>
                    <button className='but' onClick={cart}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg>
                    </button>
                    <div className="dropdown ">
                        <button className="but dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                          </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Name</a></li>
                            <li><a className="dropdown-item" href="#">Email</a></li>
                            <li><a className="dropdown-item" href="#">Phone</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div>
        <section className="slideshow">
      <div id="CarouselTextAnim" className="carousel slide carousel-slide" data-bs-ride="carousel" data-bs-interval="2000" data-bs-pause="false">
        <div className="carousel-inner">
          {/* First slide */}
          <div className="carousel-item active">
            <img src={accessories} className="img-carousel d-block w-100" alt="Accessories"/>
          </div>
          {/* Second slide */}
          <div className="carousel-item">
            <img src={dress} className="img-carousel d-block w-100" alt="Dress"/>
          </div>
          {/* Third slide */}
          <div className="carousel-item">
            <img src={skin} className="img-carousel d-block w-100" alt="Skin"/>
          </div>
        </div>
        {/* Previous button */}
        <button className="carousel-control-prev" type="button" data-bs-target="#CarouselTextAnim" data-bs-slide="prev">
          <span className="carousel-control carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Next button */}
        <button className="carousel-control-next" type="button" data-bs-target="#CarouselTextAnim" data-bs-slide="next">
          <span className="carousel-control carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
        </div>
<div className='container1'>
  {/* item 1 */}
    <div className="item">
      <div className="row" onClick={product}>
      <h3 style={{textAlign:'center'}}>Ravamp your home in style</h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item1a} alt="Item 1A" className="img-fluid" />
           <p >Cushion cover, beedsheet & more</p>
          </div>
          <div className="card-body text-center">
           <img src={item1b} alt="Item 1B" className="img-fluid" />
            <p>Home storage</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item1c} alt="Item 1C" className="img-fluid" />
            <p>Figurines, vases <br></br>& more</p>
          </div>
          <div className="card-body text-center">
            <img src={item1d} alt="Item 1D" className="img-fluid" />
            <p >Lighting solution</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 2 */}
      <div class="item">
    <div className="row" onClick={product}>
    <h3 style={{textAlign:'center'}}>Starting ₹99 | All your home improvement needs </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item4a} alt="Item 4A" className="img-fluid" />
           <p>Spin mops, wipes & more</p>
          </div>
          <div className="card-body text-center">
           <img src={item4b} alt="Item 4B" className="img-fluid" />
            <p>Bathroom hardware & accessories</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item4c} alt="Item 4C" className="img-fluid" />
            <p>Hamers, screwdrivers <br></br>& more</p>
          </div>
          <div className="card-body text-center">
            <img src={item4d} alt="Item 4D" className="img-fluid" />
            <p >Extension boards, plugs <br></br>& more</p>
          </div>
        </div>
      </div>
    </div>

      {/* item 3 */}
    <div class="item">
    <div className="row" onClick={product}>
    <h3 style={{textAlign:'center'}}>Up to 60% |Styles<br></br> for men </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item3a} alt="Item 3A" className="img-fluid" />
           <p >Clothing</p>
          </div>
          <div className="card-body text-center">
           <img src={item3b} alt="Item 3B" className="img-fluid" />
            <p>Footware</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item3c} alt="Item 3C" className="img-fluid" />
            <p>Watches</p>
          </div>
          <div className="card-body text-center">
            <img src={item3d} alt="Item 3D" className="img-fluid" />
            <p >Bags and wallets</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 4 */}
      <div class="item" onClick={product}>
      <div className="row">
      <h3 style={{textAlign:'center'}}>Starting ₹99 | Amazon Brands & more </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item2a} alt="Item 2A" className="img-fluid" />
           <p >Starting ₹99 | Kitch tools</p>
          </div>
          <div className="card-body text-center">
           <img src={item2b} alt="Item 2B" className="img-fluid" />
            <p>Starting ₹99 | Storage containers</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item2c} alt="Item 2C" className="img-fluid" />
            <p>Minimun 40% off | Cookware</p>
          </div>
          <div className="card-body text-center">
            <img src={item2d} alt="Item 2D" className="img-fluid" />
            <p >Upto 60% off | Racks <br></br>& holders</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 5 */}
    <div class="item" onClick={product}>
    <div className="row">
    <h3 style={{textAlign:'center'}}>Choose your desired screen size | TVs Starting ₹6,999</h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item5a} alt="Item 5A" className="img-fluid" />
           <p >Budget TV| Up to 60% off</p>
          </div>
          <div className="card-body text-center">
           <img src={item5b} alt="Item 5B" className="img-fluid" />
            <p>$K TVs | Up to 24 months No Cost EMI</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item5c} alt="Item 5C" className="img-fluid" />
            <p>Big Screen| Up to<br></br> 60% off</p>
          </div>
          <div className="card-body text-center">
            <img src={item5d} alt="Item 5D" className="img-fluid" />
            <p >Ultra Premium TV| Up to 60% off</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 6 */}
    <div class="item" onClick={product}>
    <div className="row">
    <h3 style={{textAlign:'center'}}>Up to 60% off | Styles <br></br>for women </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item6a} alt="Item 7A" className="img-fluid" />
           <p >Womens Clothing</p>
          </div>
          <div className="card-body text-center">
           <img src={item6b} alt="Item 6B" className="img-fluid" />
            <p>Footwear & Handbags</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item6c} alt="Item 6C" className="img-fluid" />
            <p>Watches</p>
          </div>
          <div className="card-body text-center">
            <img src={item6d} alt="Item 6D" className="img-fluid" />
            <p >Fashion jewellery</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 7 */}
    <div class="item" onClick={product}>
    <div className="row">
    <h3 style={{textAlign:'center',width:"100%"}}>Automotive essentials | Up to 60% off </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item7a} alt="Item 7A" className="img-fluid" />
           <p >Cleaning accessories <br></br> & more</p>
          </div>
          <div className="card-body text-center">
           <img src={item7b} alt="Item 7B" className="img-fluid" />
            <p>Tyre & rim care</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item7c} alt="Item 7C" className="img-fluid" />
            <p>Helmets</p>
          </div>
          <div className="card-body text-center">
            <img src={item7d} alt="Item 7D" className="img-fluid" />
            <p >Vacuum cleaner</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 8 */}
    <div class="item">
    <div className="row" onClick={product}>
    <h3 style={{textAlign:'center'}}>Baby essentials & fun toys | Amazon Brands </h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item8a} alt="Item 8A" className="img-fluid" />
           <p >Minimun 50 % off | Diapers & wipes</p>
          </div>
          <div className="card-body text-center">
           <img src={item8b} alt="Item 8B" className="img-fluid" />
            <p>Minimun 40 % off | Baby cardels & mare</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item8c} alt="Item 8C" className="img-fluid" />
            <p>Minimun 50 % off | Indoor Games</p>
          </div>
          <div className="card-body text-center">
            <img src={item8d} alt="Item 8D" className="img-fluid" />
            <p >Minimun 50 % off | Outdoor games</p>
          </div>
        </div>
      </div>
    </div>
      {/* item 9 */}
    <div class="item">
      <div className="row" onClick={product}>
      <h3 style={{textAlign:'center'}}>Up to 60% off | Professional tools, testing</h3>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item9a} alt="Item 9A" className="img-fluid" />
           <p >Professional tools</p>
          </div>
          <div className="card-body text-center">
           <img src={item9b} alt="Item 9B" className="img-fluid" />
            <p>Measuring instruments</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body text-center">
            <img src={item9c} alt="Item 9C" className="img-fluid" />
            <p>Cleaning supplies</p>
          </div>
          <div className="card-body text-center">
            <img src={item9d} alt="Item 9D" className="img-fluid" />
            <p >Medical supplies</p>
          </div>
        </div>
      </div></div>
</div>
<div className='container2'>
  <p>Todays deals</p>
  <div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row">
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal1} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Best Deal on Puma</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal2} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Travel Adapters and Electronics</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal3} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Water Softeners & accessories..</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal4} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Best Offers on Campus Footware</p>
          </div>
        </div> 
      </div>
    </div>
    </div>
    <div class="carousel-item active">
    <div class="row">
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal5} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Hard Water filters</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal6} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Mens Formal shoes..</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal7} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Great Discount on Luggage weight..</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal8} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Best Offer on Travel Accessories</p>
          </div>
        </div> 
      </div>
    </div>
    </div>
    <div class="carousel-item active">
    <div class="row">
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal9} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">deals on Backpack & Laptop</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal10} alt="Card image"/>
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Kitchen Products</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal5} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Hard Water filters</p>
          </div>
        </div> 
      </div>
      <div class="column">
        <div class="card" >
          <img class="card-img-top" src={deal6} alt="Card image" />
          <div class="card-body">
            <h4 class="card-title"><span style={{backgroundColor:"red",color:"white"}}>Up to 65% off </span><span style={{color:"red"}}>Deal of the day</span></h4>
            <p class="card-text">Mens Formal shoes..</p>
          </div>
        </div> 
      </div>
    </div>
    </div>
  </div>

  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</div>
<div className='Footer' id="Footer">
  <a className="nav-link" style={{textAlign:"center",backgroundColor:" rgb(212, 163, 103)"}} href="#home">Go to Top</a>
  <table>
  <tr>
    <th>Get to Know Us</th>
    <th>Connect with Us</th>
    <th>Make Money with Us</th>
    <th>Let Us Help You</th>
  </tr>
  <tr>
    <td>About Us</td>
    <td>Facebook</td>
    <td>Sell on Amazon</td>
    <td>COVID-19 and Amazon</td>
  </tr>
  <tr>
    <td>Careers</td>
    <td>Twitter</td>
    <td>Sell under Amazon Accelerator</td>
    <td>Your Account</td>
  </tr>
  <tr>
    <td>Press Releases</td>
    <td>Instagram</td>
    <td>Protect and Build Your Brand</td>
    <td>Returns Centre</td>
  </tr>
  <tr>
    <td>Amazon Science</td>
    <td></td>
    <td>Amazon Global Selling</td>
    <td>100% Purchase Protection</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Become an Affiliate</td>
    <td>Amazon App Download</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Fulfilment by Amazon</td>
    <td>Help</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Advertise Your Products</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Amazon Pay on Merchants</td>
    <td></td>
  </tr>
</table><br></br>
<p style={{textAlign:"center",color:"white"}}>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p>
<p style={{textAlign:"center",color:"white"}}>© 1996-2024, Amazon.com, Inc. or its affiliates</p>

</div>

</div>
        
    );
}

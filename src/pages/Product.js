import React, { useState } from 'react';
import './product.css';
import { Navigate, useNavigate } from 'react-router-dom';
import shirt from './images/men/shirt.jpg';
import tshirt from './images/men/tshirt.jpg';
import pant from './images/men/pant.jpg';
const Product = () => {
  const navigate = useNavigate();
  const Home = () => {
    navigate("/Home")
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const cart = () => {
    const dataString = encodeURIComponent(JSON.stringify(selectedItems));
    navigate(`/Cart?data=${dataString}`);
  };
  const [formData, setFormData] = useState([
    { id: 1, brand: "Arrow", type: "shirt", amount: 1599,image:{shirt} },
    { id: 2, brand: "Arrow", type: "tshirt", amount: 599 ,image:{tshirt}},
    { id: 3, brand: "Arrow", type: "pant", amount: 159,image:{pant} }
  ]);

  
  const handleBuyNow = (id) => {
    // Find the item with the given id
    const selectedItem = formData.find(item => item.id === id);
    // Add the selected item to the list of selected items
    setSelectedItems(prevSelectedItems => [...prevSelectedItems, selectedItem]);   
  };
  console.log(selectedItems);

    return (
      <div className='Product' id='Product'>
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
                            <a className="nav-link" href="#Footer">About us</a>
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
        <div className="item">
          <div className="row" >
            <div className="col-md-3">
              <div className='card'style={{backgroundColor:"white"}}>
                <div className="card-body text-center">
                  <img src={shirt} alt="Item 1A" id="image" className="img-fluid" />
                  <h4 class="card-title">ARROW</h4>
                  <p class="card-text">Men's Shirts<br/>500+ bought in past month</p>
                  <h4 class="card-title">₹5,399 M.R.P: ₹10,000 (49% off)</h4>
                  <button onClick={() => handleBuyNow(1)}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='card'style={{backgroundColor:"white"}}>
                <div className="card-body text-center">
                  <img src={tshirt}  alt="Item 1A" className="img-fluid" />
                  <h4 class="card-title">ARROW</h4>
                  <p class="card-text">Men's T-Shirts<br/>500+ bought in past month</p>
                  <h4 class="card-title">₹5,399 M.R.P: ₹10,000(49% of )</h4> 
                  <button onClick={() => handleBuyNow(2)}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='card'style={{backgroundColor:"white"}}>
                <div className="card-body text-center">
                  <img src={pant}   alt="Item 1A" className="img-fluid" />
                  <h4 class="card-title">ARROW</h4>
                  <p class="card-text">Men's Pant<br/>500+ bought in past month</p>
                  <h4 class="card-title">₹5,399 M.R.P: ₹10,000 (49% off)</h4>  
                  <button onClick={() => handleBuyNow(3)}>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='card' style={{backgroundColor:"white"}} >
                <div className="card-body text-center">
                  <img src={pant} alt="Item 1A"className="img-fluid" />
                  <h4 class="card-title">ARROW</h4>
                  <p class="card-text">Men's jean<br/>500+ bought in past month</p>
                  <h4 class="card-title">₹5,399 M.R.P: ₹10,000(49% off)</h4>  
                  <button onClick={() => handleBuyNow(4)}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Footer' id="Footer">
  <a className="nav-link" style={{textAlign:"center",backgroundColor:" rgb(212, 163, 103)"}} href="#Product">Go to Top</a>
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

</div>s
      </div>
    )
  };
  
  export default Product;
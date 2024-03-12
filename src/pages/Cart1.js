
import { useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './cart.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
const [data, setData] = useState([]);
const { search } = useLocation();
useEffect(() => {
  const params = new URLSearchParams(search);
  const dataString = params.get('data');
  const parsedData = JSON.parse(decodeURIComponent(dataString));

  // Set the parsed data string into the data state variable
  setData(parsedData);
}, [1]);

  const navigate = useNavigate();
  const Home = () => {
    navigate("/Home")
  };
  const cart = () => {
    navigate("/Cart")
  };
  const handleDelete = (itemId) => {
    // Filter out the item with the specified itemId
    const updatedData = data.findIndex(item => item.id !== itemId);
    if (updatedData !== -1) {
      data.splice(updatedData, 1);
    }
    // Update the state with the filtered data
    setData(updatedData);
  };

    return (
    <div id="cart" className='cart'>
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
        <div className='table'>
        {data && data.length > 0 ? (
  data.map(item => (
    <div className='card' style={{ backgroundColor: "white", width: "33%" }} key={item.id}>
      <div className="card-body text-center">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <img src={item.image[item.type]} alt={item.brand} />
            <h3 className="card-title" style={{ fontSize: "150%" }}>{item.brand}</h3>
            <p className="card-title" style={{ color: "red", fontSize: "120%" }}>Amount: ₹{item.amount}</p>
            <p className="card-text">Type: {item.type}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  ))
) : (
  <div style={{width:"700px",height:"300px",paddingLeft:"45%",marginTop:"30%"}}>No data available</div>
)}

  </div>
  <div className='Footer' id="Footer">
  <a className="nav-link" style={{textAlign:"center",backgroundColor:" rgb(212, 163, 103)"}} href="#cart">Go to Top</a>
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
  )
  };
  export default Cart;

    

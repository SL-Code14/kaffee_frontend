import React, { useEffect, useState } from 'react'
import './menu.css'
import coffee from "./coffee.jpg"
import axios from 'axios';

function Menu() {

  const [menus, setMenus] = useState([]);

  const getMenus = async () => {
    const response = await axios.get("http://localhost:8080/menu")
    setMenus(response.data);


  }

  useEffect(() => {
    getMenus();

  }, []);



  return (
    <div id='menucard'>
      <div className='menu'>






        <div className="container-fluid mt-5">
          <div className="row text-center">


            {
              menus.map((currElem) => {
                return (
                  <div className="col-10 col-md-4 mt-5" >
                    <div className="d-flex align-items-center">
                      <div className="image"> <img src={coffee} alt='img' className="rounded" width="155" /> </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft"> {currElem.name} </h4><span className='textLeft'>{currElem.description} </span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                          <div className="d-flex flex-column">
                            <span className="articles">Price</span> <span className="number1">{currElem.price}</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>


                )
              })
            }



























          </div>
        </div>

      </div>
    </div>













  )
}

export default Menu
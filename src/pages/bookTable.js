import React, { useState } from 'react'
import './bookTable.css'
import axios from 'axios';

function BookTable() {

    const [user, setUser] = useState({
        name: '', email: '', phone: '', date: '', time: '', guests: ''
    });

    // reset 
    const [showAlert, setShowAlert] = useState(false);





    // let name, value;
    const handleInputs = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowAlert(true);

        try {
            const response = await axios.post('http://localhost:8080/reservetable', user);
            
            console.log(response.data);

            if (response.data.success) {
                console.log('Email sent successfully!');
                // Optionally, you can show a success message to the user
            } else {
                console.error('Failed to send email.');
                // Optionally, you can show an error message to the user
            }



        }
        catch (error) {
            console.error(error);




           
        }


        // reset
        setUser({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: ''
        });
        //    reset
    };




    setTimeout(() => {
        setShowAlert(false);
    }, 3000);







    return (
        <div id='table'>
            <div className='booktable'>



                <section className='reserve'>
                    {/* <div className='container mt-5'> */}
                    {/* <div className='reserve-content'>
                        <div className='reservation-form'> */}
                    <h2 className='reserve-title'>Reserve Your Table</h2>
                    <form onSubmit={handleSubmit} className='form' id='form'>



                        <div className='form-group'>
                            <label htmlFor='name'>
                                {/* <i className="zmdi zmdi-account"></i> */}
                            </label>
                            <input className="input" type='text' name='name' id='name' autoComplete='off'
                                value={user.name}
                                onChange={handleInputs}
                                placeholder='Your Name' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>
                                {/* <i className="zmdi zmdi-email"></i> */}
                            </label>
                            <input className="input" type='email' name='email' id='email' autoComplete='off'
                                value={user.email}
                                onChange={handleInputs}
                                placeholder='Your Email' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>
                                {/* <i className="zmdi zmdi-phone-in-talk"></i> */}
                            </label>
                            <input className="input" type='number' name='phone' id='phone' autoComplete='off'
                                value={user.phone}
                                onChange={handleInputs}
                                placeholder='Contact No' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='date'>
                                {/* <i className="zmdi zmdi-calendar-check"></i> */}
                            </label>
                            <input className="input" type='date' name='date' id='name' autoComplete='off'
                                value={user.date}
                                onChange={handleInputs}
                                placeholder='Date' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='time'>
                                {/* <i className="zmdi zmdi-time"></i> */}
                            </label>
                            <input className="input" type='time' name='time' id='time' autoComplete='off'
                                value={user.time}
                                onChange={handleInputs}
                                placeholder='Time' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='guests'>
                                {/* <i className="zmdi zmdi-accounts-outline"></i> */}
                            </label>
                            <input className="input" type='number' name='guests' id='guests' autoComplete='off'
                                value={user.guests}
                                onChange={handleInputs}
                                placeholder='Number of guests' min={1} />
                        </div>


                        <div className='form-btn'>
                            <input type='submit' name='submit' id='submit' className='form-submit' />
                        </div>

                    </form>
                    {/* </div>
                    </div> */}
                    {showAlert && <div style={{ color: 'black' }}>Form submitted successfully!</div>}
                    {/* </div> */}
                </section>


            </div>
        </div>
    )
}

export default BookTable
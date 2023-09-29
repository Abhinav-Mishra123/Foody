import React from 'react';

function ReservationConfirmation(props) {
    const { formData } = props.location.state || {}; // Access form data from state

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='bookatable'>
                        <h3 className='text-center'>Reservation Confirmation</h3>
                        {formData ? (
                            <div>
                                <p>Date: {formData.date}</p>
                                <p>Time: {formData.time}</p>
                                <p>Number of Guests: {formData.guests}</p>
                                <p>Occasion: {formData.occasion}</p>
                            </div>
                        ) : (
                            <p>No data available for confirmation</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationConfirmation;

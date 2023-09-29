import React, { useState } from 'react';
import "../Styles/Menu.css"

function BookingForm() {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday"
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.date) {
            newErrors.date = "Date is required";
        }
        if (!formData.time) {
            newErrors.time = "Time is required";
        }
        if (!formData.guests) {
            newErrors.guests = "Min One Guest is required";
        }

        // Add more validation rules as needed

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Perform form submission here, e.g., send data to an API
            // Once submission is successful, set success message
            setSuccessMessage("Your table has been successfully booked.");
        }
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='bookatable'>
                        <h3 className='text-center'>Book a Table</h3>
                        <form style={{ display: 'grid', maxWidth: '300px', gap: '10px', margin: 'auto' }} onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label className='form-label' htmlFor="res-date">Choose date</label>
                                <input type="date" className='form-control' id="res-date" name="date" value={formData.date} onChange={handleInputChange} />
                                {errors.date && <div className="text-danger">{errors.date}</div>}
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label' htmlFor="res-time">Choose time</label>
                                <select id="res-time" className='form-control' name="time" value={formData.time} onChange={handleInputChange}>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                </select>
                                {errors.time && <div className="text-danger">{errors.time}</div>}
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label' htmlFor="guests">Number of guests</label>
                                <input type="number" className='form-control' placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleInputChange} />
                                {/* Add validation and error message for guests if needed */}
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label' htmlFor="occasion">Occasion</label>
                                <select id="occasion" className='form-control' name="occasion" value={formData.occasion} onChange={handleInputChange}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Kitty Party</option>
                                    <option>Engagement</option>
                                </select>
                                {/* Add validation and error message for occasion if needed */}
                            </div>
                            <div className='submitdiv mb-4 text-center'>
                                <input type="submit" className='btn btn-secondary' value="Make Your reservation" />
                            </div>
                        </form>
                        {successMessage && <div className="text-success fw-bold text-center">{successMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;

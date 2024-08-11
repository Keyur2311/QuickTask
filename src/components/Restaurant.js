import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Restaurant = (props) => {

    const [credentials, setCredentials] = useState({ cuisine: "", city: "", rating: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cuisine: credentials.cuisine, city: credentials.city, rating: credentials.rating })
        });

        const json = await response.json()
        console.log(json)

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Accoount created successfully", "success")
        } else {
            props.showAlert("Invalid details", "danger")
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <form>
                <h3>Fill up the form</h3>
                <div className="mb-1">
                    <label for="cuisine" className="form-label"><h5>Cusine type</h5></label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" for="inlineCheckbox1">North Indian</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label className="form-check-label" for="inlineCheckbox2">South Indian</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Italian</label>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Japanese</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Chinese</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Cafe</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Pizza</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Beverages</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Fast Food</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox10" value="option3" />
                    <label className="form-check-label" for="inlineCheckbox3">Street Food</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox11" value="option1" />
                    <label className="form-check-label" for="inlineCheckbox1">Continental</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox12" value="option1" />
                    <label className="form-check-label" for="inlineCheckbox1">Asian</label>
                </div>

                <div className="mb-3">
                    <label for="location" className="form-label"><h5>City</h5></label>
                    <input type="text" className="form-control" id="location1" />
                </div>


                <div className="mb-3">
                    <label for="location" className="form-label"><h5>Expected rating (out of 5)</h5></label>
                    <div className="input-group mb-12">

                        <select className="form-select" id="inputGroupSelect01">
                            <option value="1">choose</option>
                            <option value="1">4+</option>
                            <option value="2">3+</option>
                            <option value="2">2+</option>
                            <option value="2">1+</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Restaurant
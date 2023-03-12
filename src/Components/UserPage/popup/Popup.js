import React from 'react';
import "./pop.css"

function Popup(props) {

    const handleInputChange = (event) => {
        props.setEditValue({...props.EditValue,[event.target.name]: event.target.value})
    };

    const handleSubmit = () => {
        const temp = props.users.map((data)=>{
            if(data.id==props.EditValue.id){
                data.name =props.EditValue.Username
                data.email =props.EditValue.email
                data.phone =props.EditValue.phone
                data.website =props.EditValue.website
            }
            return data
        })
        props.setUsers(temp)
        props.onClose()
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <h2>{props.title}</h2>
                    <button className="close-btn" onClick={props.onClose}>
                        &times;
                    </button>
                </div>
                <div className="popup-content">
                    <label htmlFor="input">Name</label>
                    <input type="text" id="Username" name='Username' value={props.EditValue.Username} onChange={handleInputChange} />
                    <label htmlFor="input">Email</label>
                    <input type="text" id="email" name='email' value={props.EditValue.email} onChange={handleInputChange} />
                    <label htmlFor="input">Phone</label>
                    <input type="text" id="phone" name='phone' value={props.EditValue.phone} onChange={handleInputChange} />
                    <label htmlFor="input">Website</label>
                    <input type="text" id="website" name='website' value={props.EditValue.website} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;

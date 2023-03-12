import React, { useEffect, useState } from 'react';
import Popup from './popup/Popup';
import './User.css';

const UserCard = ({ user, index, avatar, hanleDelete, handleOpenPopup }) => {
    const [love, setlove] = useState(true)

    return (
        <div className="card">
            <div className="card-body">
                <div style={{ textAlign: "center" }}> <img src={avatar[index]} style={{ width: "10rem" }} /></div>

                <h5 className="card-title">Name:-{user.name}</h5>
                <p className="card-text">Gmail:-{user.email}</p>
                <p className="card-text">Phone:-{user.phone}</p>
                <p className="card-text">Website:-{user.website}</p>
                <div className="card-Icon">
                    <div className="card-Icon1" onClick={() => setlove(!love)}>{love ? <i class="fa fa-heart" aria-hidden="true"></i> : <i class="fa fa-heart-o" aria-hidden="true"></i>}</div>
                    <div className="card-Icon2" onClick={() => handleOpenPopup(user)}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    <div className="card-Icon3" onClick={() => hanleDelete(user.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    );
};

const UserPage = () => {
    const [users, setUsers] = useState(null);
    const [avatar, setAvatar] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [EditValue, setEditValue] = useState({
        Username: '',
        email: '',
        phone: '',
        website:'',
        id:""
    });
    const handleOpenPopup = (user) => {
        setEditValue({...EditValue,Username:user.name,email:user.email,phone:user.phone,id:user.id,website:user.website})
        setShowPopup(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = (value) => {
        setInputValue(value);
        setShowPopup(false);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                handleAvatar(element.name);
            }

        };
        fetchUsers();
    }, []);

    const handleAvatar = async (users) => {
        const response = await fetch(`https://api.dicebear.com/5.x/pixel-art/svg?seed=${users}`);
        setAvatar((prev) => [...prev, response.url])
    }
    const hanleDelete = (id) => {
        setUsers(users.filter((data) => data.id !== id))
    }
    return (
        <>
            <div className="container">
                <div className="Newcontainer">
                    {users?.map((user, index) => {
                        return (
                            <>
                                <UserCard key={user.id} user={user} index={index} avatar={avatar} hanleDelete={hanleDelete} handleOpenPopup={handleOpenPopup} />
                            </>

                        )
                    })}
                </div>
            </div>
            {showPopup && (
                <Popup
                    title="Edit Profile"
                    onClose={handleClosePopup}
                    onSubmit={handleSubmit}
                    setEditValue={setEditValue}
                    EditValue={EditValue}
                    setUsers={setUsers}
                    users={users}
                />
            )}
        </>
    );
};

export default UserPage;

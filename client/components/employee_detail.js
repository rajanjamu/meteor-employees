import React from 'react';

const EmployeeDetail = ({ employee }) => {

    const { name, email, phone, avatar } = employee;

    return (
        <div className="thumbnail">
            <img src={avatar} className="card-img-top" alt="..." />
            <div className="caption">
                <h3 className="card-title">{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeDetail;
import React from 'react';
import { toast } from 'react-toastify';


const UserTable = ({ person, refetch, index }) => {
    const { email, role } = person;
    const makeAdmin = () => {
        fetch(`https://creative-agency-c2st.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

        // .then( res => res.json())
        // .then(data =>{
        //     console.log(data);
        // })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-accent btn-xs">Make Admin</button>}
                {role === 'admin' && <button disabled className="btn btn-accent btn-xs">Already have an Admin</button>}
            </td>
            <td><button className="btn btn-primary btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserTable;
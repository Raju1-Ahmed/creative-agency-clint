import React from 'react';
import Loading from '../shared/Loading';
import { useQuery } from 'react-query';
import UserTable from './UserTable';


const MakeAdmin = () => {
    const { data: persons, isLoading, refetch } = useQuery('persons', () => fetch('https://creative-agency-c2st.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {persons.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((person, index) => <UserTable
                                key={person._id}
                                person={person}
                                refetch={refetch}
                                index={index}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;
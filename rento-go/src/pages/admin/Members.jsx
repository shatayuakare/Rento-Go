import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import MemberView from './MemberView';

const Members = () => {

    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        await axios.get("http://localhost:8080/auth/").then(res => {
            const data = res.data;
            setUsers(data);
        }).catch(err => toast.error(err))
    }

    useEffect(() => {
        getUsers();
    }, [users])

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/auth/adelete/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.log(err))
    }

    return (
        <div className="h-full overflow-y-auto">
            <table className='table text-center' >
                <thead className='text-white sticky top-0 text-md bg-zinc-700 '>
                    <tr>
                        <th className='w-16'>Profile</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Vehicles</th>
                        <th className='w-6'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((elem) =>
                            <tr key={elem._id}>
                                <td>
                                    <img className='w-12 h-12 mx-auto rounded-md' src={(elem.img) || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECX tEG_6-RV7CSNgNoYUGZE-JCliYm9g&s'} alt="" />
                                </td>
                                <td className='text-start'>{elem.name}</td>
                                <td>{elem.phone}</td>
                                <td className='lowercase text-start'>{elem.email}</td>
                                <td>5</td>
                                <td>3</td>
                                <td>
                                    <div className="dropdown dropdown-top dropdown-end dropdown-left bg-transparent p-0">
                                        <div tabIndex={0} role="button" className="btn bg-transparent min-w-0 w-8 h-8  hover:bg-zinc-100 rounded-full min-h-0 border-0 text-black">
                                            <i className='bx text-xl bx-dots-vertical-rounded'></i>
                                        </div>

                                        <ul tabIndex={0} className="dropdown-content bg-white vehicle-menu menu p-1 z-[1] text-nowrap text-start">
                                            <li>
                                                <button className='btn text-green-500 btn-xs btn-ghost ' type='button'
                                                    onClick={() => document.getElementById('memberview').showModal()}>
                                                    View
                                                </button>
                                            </li>
                                            <li>
                                                <button className='btn text-red-500 btn-xs btn-ghost ' type='button' onClick={() => deleteUser(elem._id)}>Delete</button>
                                            </li>
                                        </ul>
                                        <MemberView data={elem} />
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Members
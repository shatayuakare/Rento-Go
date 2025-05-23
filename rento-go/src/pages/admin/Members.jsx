import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { server } from '../../utils/Constants';
const MemberView = lazy(() => import('./modal/MemberView'));
const ContentLoader = lazy(() => import('../../components/ContentLoader'));

const Members = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            await axios.get(`${server}/auth/`).then(res => {
                const data = res.data;
                setUsers(data);
            }).catch(err => toast.error(err))
        }

        getUsers();
    }, [users])

    const deleteUser = async (id) => {
        await axios.delete(`${server}/auth/adelete/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.log(err.message))
    }

    const makeAdmin = async (id) => {
        await axios.put(`${server}/auth/newadmin/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.error(err.message))
    }
    const removeAdmin = async (id) => {
        await axios.put(`${server}/auth/removeadmin/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.error(err.message))
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
                                <td className='avatar'>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img className=' mx-auto rounded-md' src={`${elem.img ? ((elem.img) + '?format=webp&crop=circle') : 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'}`} alt="profile pic" />
                                    </div>

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
                                                {
                                                    !(elem.admin) ?
                                                        <button className='btn text-green-600 btn-xs btn-ghost ' type='button' onClick={() => makeAdmin(elem._id)}>New Admin</button>
                                                        :
                                                        <button className='btn text-red-700 btn-xs btn-ghost ' type='button' onClick={() => removeAdmin(elem._id)}>Remove Admin</button>
                                                }
                                            </li>



                                            <li>
                                                <button className='btn text-red-500 btn-xs btn-ghost ' type='button' onClick={() => deleteUser(elem._id)}>Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <Suspense fallback={<ContentLoader />}>
                                        <MemberView data={elem} />
                                    </Suspense>
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
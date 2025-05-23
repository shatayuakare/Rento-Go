import axios from 'axios'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { server } from '../../utils/Constants'
const ContentLoader = lazy(() => import('../../components/ContentLoader'))
const ContactView = lazy(() => import('./modal/ContactView'))

const ContactData = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getContacts = async () => {
            await axios.get(`${server}/contacts`).then(res => {
                setContacts((res.data))
            }).catch(err => console.error(err))
        }

        getContacts()

    }, [contacts])

    const deleteContact = async (id) => {
        await axios.delete(`${server}/contacts/delete/${id}`).then(res => {
            toast.success(res.data.message)
        }).catch(err => console.error(err.message))
    }

    return (
        <div className="overflow-y-auto h-full flex flex-wrap gap-4">
            <table className='table text-center h-fit' >
                <thead className='text-white sticky z-10 top-0 text-md bg-zinc-700 '>
                    <tr>
                        <th>{contacts.length}</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th className='w-6'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((elem, i) =>
                            <Suspense fallback={<ContentLoader />} key={i}>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.phone}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.message}</td>
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
                                                    <button className='btn text-red-500 btn-xs btn-ghost ' type='button' onClick={() => deleteContact(elem._id)}>Delete</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <ContactView data={elem} />
                            </Suspense>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ContactData
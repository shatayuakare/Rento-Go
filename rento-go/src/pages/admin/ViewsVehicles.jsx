import React from 'react'

const ViewsVehicles = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Brand</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Hyundai</td>
                    <td>I20</td>
                    <td>2000/day</td>
                    <td>Booked</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Honda</td>
                    <td>Civic</td>
                    <td>2500/day</td>
                    <td>Ready</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ViewsVehicles
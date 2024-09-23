import React, { useState } from 'react'

const ShareForm = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    // const [lname, setLname] = useState("")

    return (
        <form action="">
            <div>
                <label htmlFor="fname" className="label">First Name</label>
                <input type="text" name="fname" id="fname" className="input border-0 border-b-2 bg-transparent border-black" />
            </div>

            <div>
                <label htmlFor="lname" className="label">Last Name</label>
                <input type="text" name="lname" id="lname" className="input" />
            </div>

        </form>
    )
}

export default ShareForm
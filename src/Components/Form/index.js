import React, {useState} from 'react'
import GroupInput from '../Input'
import './Form.scss'

const Form = () => {
    const [formData, setFormData] = useState({name: "", email: "",})
    const [invalidName, setInvalidName] = useState("")
    const [invalidEmail, setInvalidEmail] = useState("")
    const [checkSubmit, setCheckSubmit] = useState({name: false, email: false})

    const ValidatorEmail = () => {
        const reg = /\S+@\S+.\S+/;
        if(!reg.test(formData.email)) {
            setInvalidEmail("Invalid email address.")
            setCheckSubmit({...checkSubmit, email: false})
        } else {
            setInvalidEmail('')
            setCheckSubmit({...checkSubmit, email: true})
        }
    }   

    const ValidatorName = () => {
        if(formData.name === "") {
            setInvalidName("Invalid name.")
            setCheckSubmit({...checkSubmit, name: false})
        } else {
            setInvalidName("")
            setCheckSubmit({...checkSubmit, name: true})
        }
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkSubmit.name && checkSubmit.email){
            console.log(formData)
        }
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="card-item">
            <h3 className='card-item_title'>Book Appointment</h3>
                <GroupInput title="Name*">
                    <input className={invalidName === "" ? "inputform-control" : "inputform-control_danger"} type="text" placeholder='Full Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} onBlur={ValidatorName}/>
                    <p className='validate-danger'>{invalidName}</p>
                </GroupInput>
                <GroupInput title="Email*">
                    <input className={invalidEmail === "" ? "inputform-control" : "inputform-control_danger"} type="text" placeholder='example@gmail.com' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} onBlur={ValidatorEmail}/>
                    <p className='validate-danger'>{invalidEmail}</p>
                </GroupInput>
                <GroupInput title="Department*">
                    <select>
                        <option>Please Select</option>
                    </select>
                    <p className='validate-danger'></p>
                </GroupInput>
                <GroupInput title="Time*">
                    <select>
                        <option>4:00 Available</option>
                    </select>
                    <p className='validate-danger'></p>
                </GroupInput>
            <button type='submit' className='buttonbtnprimary-color'>Book Appointment</button>
        </div>
    </form>
    )
}

export default Form 
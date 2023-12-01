import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Toaster, toast } from "react-hot-toast"
import { registerValidate } from '../../validate';
import { RegisterUser } from '../../apicalls/contact';
import img from '../../assets/3dstudio.png'
import model from '../../assets/3dman.png'
import '../../App.css'
import { MdEmail, MdPerson, MdWhatsapp, MdOutlineMessage } from 'react-icons/md';
import { InfinitySpin } from 'react-loader-spinner';

const Contact = () => {

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      number: '',
      mailmessage: '',
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      setLoading(true);
      const response = await RegisterUser(values);
      console.log(response)
      if (response.success) {
        setLoading(false);
        toast.success(response.message);
      } else {
        setLoading(false);
        toast.error(response.message);
      }
      setLoading(false);
      values.username = '';
      values.email = '';
      values.number = '';
      values.mailmessage = '';
    },

  })

  useEffect(() => {
    window.scrollTo(0, 0); // This line will scroll the window to the top
  }, [])

  return (
    <>


      <Toaster position="top-center" reverseorder={false}></Toaster>
      <div className="parent">

        <div className="page">

          <div className="first">
            <h1> WE,D LOVE TO </h1>
            <h1>HEAR FROM YOU</h1>
            <img className="image" src={model} alt="" />
          </div>
          <div className="second">
            <div className="contact-form">
              <form action="" onSubmit={formik.handleSubmit} >
                <h1 className='header1'>CONTACT ME</h1>
                <div className="input-box">
                  <span className='icon'><MdPerson size={20} /></span>
                  <input {...formik.getFieldProps('username')} type="name" placeholder='FullName' />
                </div>
                <div className="input-box">
                  <span className='icon'><MdEmail size={20} /></span>
                  <input {...formik.getFieldProps('email')} type="email" placeholder='Email' />
                </div>
                <div className="input-box">
                  <span className='icon'><MdWhatsapp size={20} /></span>
                  <input {...formik.getFieldProps('number')} type="text" placeholder='Whatsapp No.' maxLength={10} />
                </div>
                <div className="input-box">
                  <span className='icon'><MdOutlineMessage size={20} /></span>
                  <textarea {...formik.getFieldProps('mailmessage')} cols="30" rows="10" placeholder='what is in your mind'></textarea>
                </div>
                {loading ? (
                  <InfinitySpin
                    width='200'
                    color="red"
                  />
                ) : (
                  <button className='btn1' type='submit'>Submit</button>
                )}

              </form>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default Contact

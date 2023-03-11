import React from 'react'
import "./contact.css"
import Form from './Form'

const Contact = () => {
  return (
    <>
        <section className="contact-section">
            <div className="container">
                <h1 className="position-absolute">Contact</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-end fw-bold">Interested in driving growth?</h2>
                        <img src="./src/assets/images/contact-image.png" className="contact-image" alt="" />
                    </div>
                    <div className="col-lg-6 contact__form">
                        <p>Have a general question?<br /> We're just an email away.</p>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
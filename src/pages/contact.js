import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const contact_us = () => {
    return (
        <div className='rounded-b-[50px] bg-gradient-to-br from-lime-500 to-slate-200'>
            <div className='container py-5 gap-2'>
                <div className='mx-auto bg-black text-white rounded-xl px-[10px] py-[20px] max-w-[400px] shadow-sm'>
                    <div className='text-center'>
                    <h3 className='text-[24px]  font-[500] mb-2 themeLinear'>
                        Build with us
                    </h3>
                    </div>
                    
                    <p className='text-[14px] text-center mb-3'>Join us and let's start the fitness journey together!. fill out the form ,and our team will respond within 24hours </p>
                    <Form className='max-w-[400px] mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control  type="email" placeholder="Enter name" className='rounded-none' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='rounded-none' />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="message..." className='rounded-none'/>
                        </Form.Group>
                        <Button className={`bg-theme font-[500] text-white px-[20px] py-[5px] w-full border-none hover:bg-theme focus:bg-theme active:bg-theme  rounded-none`}>Submit</Button>
                    </Form>
                </div>

            </div>
        </div>

    )
}

export default contact_us

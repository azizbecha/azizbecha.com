"use client"

import React, { useState, FormEvent, ChangeEvent } from 'react';
import Button from './Button';

import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {

    const formAction = "https://formsubmit.co/6fbf2ebd1edbc259d5579504af93a16c";

    const initialFormData: FormData = {
        name: '',
        email: '',
        message: ''
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);

        // Perform validation here
        if (isEmpty(formData.name.trim())) {
            toast.error("Please enter your name");
            setLoading(false);
        }

        if (isEmpty(formData.name.trim()) || !isEmail(formData.email.trim())) {
            toast.error("Please enter a valid email");
            setLoading(false);
        }

        if (isEmpty(formData.message.trim())) {
            toast.error("Please enter your message");
            setLoading(false);
        }

        // If validation passes, submit the form
        const form = e.currentTarget;
        form.setAttribute('action', formAction);
        form.submit();
        form.removeAttribute('action');

        toast.success("Thanks for getting in touch");
        // Clear form values after submission
        setFormData(initialFormData);
        setLoading(false);
    };

    return (
        <form action={formAction} method="POST" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-2">
                    <label className="font-ubuntu">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="block mt-1.5 px-3 py-2.5 w-full z-20 text-sm bg-grey rounded-lg focus:outline-none" placeholder="Enter your name" disabled={loading} required />
                </div>
                <div className="mb-2">
                    <label className="font-ubuntu">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="block mt-1.5 px-3 py-2.5 w-full z-20 text-sm bg-grey rounded-lg focus:outline-none" placeholder="Enter your email" disabled={loading} required />
                </div>
            </div>
            <div className="mb-4">
                <label className="font-ubuntu">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="block mt-1.5 px-3 py-2.5 w-full z-20 text-sm bg-grey rounded-lg focus:outline-none" placeholder="Enter your message" disabled={loading} required></textarea>
            </div>
            <Button type="submit" disabled={loading}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;

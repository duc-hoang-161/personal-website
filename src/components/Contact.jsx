import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    isValidEmail,
    isValidPhoneNumber,
    convertSlugToProperty,
} from '../utils';
import Field from './Field';
import { addContact } from '../services/contact-service';
import LoadingOverlay from './LoadingOverlay';

const EMPTY_ERROR = 'Please fill out this field before submitting';

export default function Contact(props) {
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onFieldChange = (e) => {
        setIsSubmitted(false);
        setFormData({
            ...formData,
            [convertSlugToProperty(e.target.name)]: e.target.value,
        });
    };
    const { messageTitle, message, email, name, phone } = formData;
    const fields = [
        {
            label: 'Subject',
            name: 'message-title',
            type: 'text',
            value: messageTitle,
            placeholder: 'Hello there!',
            onChange: onFieldChange,
            error: !messageTitle && EMPTY_ERROR,
        },
        {
            label: 'Message',
            name: 'message',
            type: 'textarea',
            value: message,
            placeholder: "Let's be friends!",
            onChange: onFieldChange,
            error: !message && EMPTY_ERROR,
        },
        {
            label: 'Email',
            name: 'email',
            type: 'text',
            value: email,
            placeholder: 'youremail@domain.com',
            onChange: onFieldChange,
            error:
                (!email && EMPTY_ERROR) ||
                (!isValidEmail(email) && 'Please enter a valid email address'),
        },
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            value: name,
            placeholder: 'My name is...',
            onChange: onFieldChange,
            error: !name && EMPTY_ERROR,
        },
        {
            label: 'Phone Number (Optional)',
            name: 'phone',
            type: 'text',
            value: phone,
            placeholder: 'Call me maybe?',
            onChange: onFieldChange,
            error:
                phone &&
                !isValidPhoneNumber(phone) &&
                'Please enter a valid phone number',
        },
    ];

    const onSubmit = async (e) => {
        setIsSubmitted(true);
        e.preventDefault();
        const isValidForm = !fields.some((field) => field.error);
        if (isValidForm) {
            setLoading(true);
            await addContact(formData);
            setLoading(false);
            setIsSuccess(true);
        }
    };

    return (
        <motion.div
            className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card mb-10"
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8 relative">
                    <div>
                        <img
                            class="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Email"
                        />
                        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gradient">
                            Let's keep in touch
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">
                            Fill out the form below to get in touch with me.
                        </p>
                    </div>
                    <LoadingOverlay show={loading} text="Sending..." />
                    {isSuccess ? (
                        <div
                            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                            role="alert"
                        >
                            <div class="flex">
                                <div class="py-1">
                                    <svg
                                        class="fill-current h-6 w-6 text-teal-500 mr-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            class="text-green-600 fill-current"
                                            d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold">
                                        Thank you for your interest!
                                    </p>
                                    <p class="text-sm">
                                        I will get back to you as soon as I can.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit}>
                            {fields.map((field) => (
                                <Field
                                    key={field.name}
                                    {...field}
                                    isSubmitted={isSubmitted}
                                />
                            ))}
                            <div class="flex justify-center mt-10">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-full"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

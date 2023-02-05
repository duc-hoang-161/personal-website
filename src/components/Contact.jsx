import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    isValidEmail,
    isValidPhoneNumber,
    convertSlugToProperty,
} from '../utils';
import Field from './Field';

const EMPTY_ERROR = 'Please fill out this field before submitting';

export default function Contact(props) {
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onFieldChange = (e) => {
        setIsSubmitted(false);
        setFormData({
            ...formData,
            [convertSlugToProperty(e.target.name)]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        setIsSubmitted(true);
        e.preventDefault();
    };

    const { messageTitle, message, email, name, phone } = formData;
    const fields = [
        {
            label: 'Message Title',
            name: 'message-title',
            type: 'text',
            value: messageTitle,
            placeholder: 'Hello there!',
            onChange: onFieldChange,
            error: isSubmitted && !messageTitle && EMPTY_ERROR,
        },
        {
            label: 'Message',
            name: 'message',
            type: 'textarea',
            value: message,
            placeholder: "Let's be friends!",
            onChange: onFieldChange,
            error: isSubmitted && !message && EMPTY_ERROR,
        },
        {
            label: 'Email',
            name: 'email',
            type: 'text',
            value: email,
            placeholder: 'youremail@domain.com',
            onChange: onFieldChange,
            error:
                isSubmitted &&
                ((!email && EMPTY_ERROR) ||
                    (!isValidEmail(email) &&
                        'Please enter a valid email address')),
        },
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            value: name,
            placeholder: 'My name is...',
            onChange: onFieldChange,
            error: isSubmitted && !name && EMPTY_ERROR,
        },
        {
            label: 'Phone (Optional)',
            name: 'phone',
            type: 'text',
            value: phone,
            placeholder: 'Call me maybe?',
            onChange: onFieldChange,
            error:
                isSubmitted &&
                phone &&
                !isValidPhoneNumber(phone) &&
                'Please enter a valid phone number',
        },
    ];
    return (
        <motion.div
            className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card mb-10"
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8">
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
                    <form onSubmit={onSubmit}>
                        {fields.map((field) => (
                            <Field key={field.name} {...field} />
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
                </div>
            </div>
        </motion.div>
    );
}

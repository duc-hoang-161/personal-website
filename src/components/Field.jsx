import React from 'react';

export default function ({
    label,
    name,
    type,
    value,
    placeholder,
    onChange,
    error,
}) {
    return (
        <div class="mb-4">
            <label class="block text-white font-medium mb-2" for={name}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    onChange={onChange}
                    value={value || ''}
                    placeholder={placeholder || ''}
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id={name}
                    name={name}
                    type={type}
                    rows="5"
                />
            ) : (
                <input
                    onChange={onChange}
                    value={value || ''}
                    placeholder={placeholder || ''}
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id={name}
                    name={name}
                    type={type}
                />
            )}

            {error && <p class="text-red-500 text-xs italic mt-2">{error}</p>}
        </div>
    );
}

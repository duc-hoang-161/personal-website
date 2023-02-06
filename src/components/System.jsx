import React from 'react';
import { motion } from 'framer-motion';
import { systemDrawio } from '../assets';

export default function () {
    return (
        <motion.div
            className="px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card mb-10"
            whileInView={{ y: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gradient mb-10">
                This website's infrastructure
            </h2>
            <div className="flex justify-center">
                <img src={systemDrawio} />
            </div>
        </motion.div>
    );
}

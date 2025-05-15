import React from 'react';
import {motion} from "framer-motion";

const ContactUs: React.FC = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
    >
    </motion.div>;
};

export default ContactUs;
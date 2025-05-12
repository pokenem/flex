import React from 'react';
import Contact from "../components/Contact";
import {motion} from "framer-motion";

const ContactUs: React.FC = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
    >
        <Contact />
    </motion.div>;
};

export default ContactUs;
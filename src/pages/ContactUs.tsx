import React from 'react';
import {motion} from "framer-motion";
import ContactUsComponent from "../components/contact_us/ContactUsComponent";
import Contacts from "../components/contact_us/Contacts";

const ContactUs: React.FC = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
    >
        <Contacts></Contacts>
    </motion.div>;
};

export default ContactUs;
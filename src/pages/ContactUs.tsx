import React from 'react';
import {motion} from "framer-motion";
import Contacts from "../components/contact_us/Contacts";
import { useLocale } from '../context/LocaleContext';

const ContactUs: React.FC = () => {
    const { t } = useLocale();
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
    >
        <Contacts></Contacts>
    </motion.div>;
};

export default ContactUs;
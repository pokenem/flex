import {motion} from 'framer-motion';
import React from 'react';
import './Terms.css'; // если нужны стили, можешь подключить
import { useLocale } from '../context/LocaleContext';

const Terms: React.FC = () => {
    const { t } = useLocale();
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
        >
            <div className="terms-container p-2">
                <h1 className="text-4xl font-medium u-text-center u-mb-1">{t('terms.title')}</h1>

                {[0,1,2,3,4].map(i => (
                    <section className="u-mb-1" key={i}>
                        <h2 className="text-2xl font-regular u-mb-1">{t(`terms.sections.${i}.title`)}</h2>
                        <p className="text-base font-regular">{t(`terms.sections.${i}.text`)}</p>
                    </section>
                ))}
            </div>
        </motion.div>
    )
};

export default Terms;

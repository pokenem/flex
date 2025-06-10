import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Career.css';
import { useLocale } from '../context/LocaleContext';

interface JobListItem {
    id: number;
    title: string;
    slug: string;
    location: string;
    categories: string;
    level: string;
}

interface StrapiResponse {
    data: JobListItem[];
}

const Career: React.FC = () => {
    const [jobs, setJobs] = useState<JobListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { t, lang } = useLocale();

    useEffect(() => {
        axios
            .get<StrapiResponse>(
                `http://212.57.37.107:1337/api/job-postings?fields[0]=title&fields[1]=slug&fields[2]=location&fields[3]=categories&fields[4]=level&locale=${lang}`
            )
            .then(res => {
                const list = res.data.data.filter(job => !!job.slug);
                setJobs(list);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [lang]);

    if (loading) {
        return <>
            <div className="app-layout">
                <main className="app-main">
                    <h1 className="text-4xl font-bold u-mb-2 u-text-center">{t('loading')}</h1>
                </main>
            </div>
        </>;

    }

    if (error) {
        return <div className="text-4xl font-bold u-mb-2 u-text-center">{t('error')}: {error}</div>;
    }

    return (
        <div className="app-layout">
            <main className="app-main">
                <h1 className="text-4xl font-bold u-mb-2 u-text-center">{t('vacancies')}</h1>
                <ul className="career-list">
                    {jobs.length === 0 ? (
                        <li className="u-text-center">{t('no_vacancies')}</li>
                    ) : (
                        jobs.map(job => (
                            <motion.li
                                key={job.id}
                                className="job-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <Link to={`/jobs/${job.slug}`}>
                                    <div>
                                        <h2 className="text-3xl font-medium u-mb-1">{job.title}</h2>
                                        <div className="text-base">
                                            {job.location} | {job.categories} | {job.level}
                                        </div>
                                    </div>
                                </Link>
                            </motion.li>
                        ))
                    )}
                </ul>
            </main>
        </div>
    );
};

export default Career;

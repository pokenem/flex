import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Career.css';

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

    useEffect(() => {
        axios
            .get<StrapiResponse>(
                'http://localhost:1337/api/job-postings?fields[0]=title&fields[1]=slug&fields[2]=location&fields[3]=categories&fields[4]=level'
            )
            .then(res => {
                const list = res.data.data.filter(job => !!job.slug);
                setJobs(list);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <>
            <div className="app-layout">
                <main className="app-main">
                    <h1 className="text-4xl font-bold u-mb-2 u-text-center">Loading...</h1>
                </main>
            </div>
        </>;

    }

    if (error) {
        return <div className="text-4xl font-bold u-mb-2 u-text-center">Error: {error}</div>;
    }

    return (
        <div className="app-layout">
            <main className="app-main">
                <h1 className="text-4xl font-bold u-mb-2 u-text-center">BEBE</h1>
                <ul className="career-list">
                    {jobs.length === 0 ? (
                        <li className="u-text-center">No </li>
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

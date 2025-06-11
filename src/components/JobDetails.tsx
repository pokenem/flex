import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';
import { useLocale } from '../context/LocaleContext';

interface Task { id: number; title: string; details: string; }
interface Skill { id: number; title: string; details: string; }
interface Posting {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    location: string;
    categories: string;
    level: string;
    employmentType: string;
    contactName: string;
    contactRole: string;
    contactEmail: string;
    educationExperience: string | null;
    tasks: Task[];
    skills: Skill[];
}

const JobDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [data, setData] = useState<Posting | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { t, lang } = useLocale();

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        fetch(`http://212.57.37.107:1337/api/job-postings?filters[slug][$eq]=${slug}&populate[]=tasks&populate[]=skills&locale=${lang}`)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(res => {
                if (res.data.length === 0) throw new Error('Job not found');
                setData(res.data[0]);
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, [slug, lang]);

    if (loading) return <p className="u-text-center">{t('loading')}</p>;
    if (error) return <p className="u-text-center">{t('error')}: {error}</p>;
    if (!data) return null;

    return (
        <main className="app-main job-page">
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <div className="description" dangerouslySetInnerHTML={{ __html: data.description }} />

            <div className="info-card">
                <div><strong>{t('location')}:</strong> {data.location}</div>
                <div><strong>{t('category')}:</strong> {data.categories}</div>
                <div><strong>{t('level')}:</strong> {data.level}</div>
                <div><strong>{t('employment')}:</strong> {data.employmentType}</div>
            </div>

            <section>
                <h3>{t('tasks')}</h3>
                <ul>
                    {data.tasks.map(tk => (
                        <li key={tk.id}>
                            <strong>{tk.title}:</strong> {tk.details}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>{t('skills')}</h3>
                <ul>
                    {data.skills.map(sk => (
                        <li key={sk.id}>
                            <strong>{sk.title}:</strong> {sk.details}
                        </li>
                    ))}
                </ul>
            </section>

            {data.educationExperience && (
                <section>
                    <h3>{t('education')}</h3>
                    <p>{data.educationExperience}</p>
                </section>
            )}

            <div className="divider" />
            <section className="contact">
                <h3>{t('contacts.title')}</h3>
                <p><strong>{data.contactName}</strong> — {data.contactRole}</p>
                <p>✉️<a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a></p>
            </section>
        </main>
    );
};
export default JobDetails;
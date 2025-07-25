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
            <h1 className="font-medium text-4xl u-mb-1">{data.title}</h1>
            <h2 className="font-medium text-2xl u-mb-1">{data.subtitle}</h2>
            <div className="description font-regular" dangerouslySetInnerHTML={{ __html: data.description }} />

            <div className="info-card">
                <div><span className="font-medium">{t('location')}:</span> <span className="font-regular">{data.location}</span></div>
                <div><span className="font-medium">{t('category')}:</span> <span className="font-regular">{data.categories}</span></div>
                <div><span className="font-medium">{t('level')}:</span> <span className="font-regular">{data.level}</span></div>
                <div><span className="font-medium">{t('employment')}:</span> <span className="font-regular">{data.employmentType}</span></div>
            </div>

            <section>
                <h3 className="font-medium text-xl u-mb-1">{t('tasks')}</h3>
                <ul>
                    {data.tasks.map(tk => (
                        <li key={tk.id}>
                            <span className="font-medium">{tk.title}:</span> <span className="font-regular">{tk.details}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 className="font-medium text-xl u-mb-1">{t('skills')}</h3>
                <ul>
                    {data.skills.map(sk => (
                        <li key={sk.id}>
                            <span className="font-medium">{sk.title}:</span> <span className="font-regular">{sk.details}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {data.educationExperience && (
                <section>
                    <h3 className="font-medium text-xl u-mb-1">{t('education')}</h3>
                    <p className="font-regular">{data.educationExperience}</p>
                </section>
            )}

            <div className="divider" />
            <section className="contact">
                <h3 className="font-medium text-xl u-mb-1">{t('contacts.title')}</h3>
                <p><span className="font-medium">{data.contactName}</span> <span className="font-regular">— {data.contactRole}</span></p>
                <p className="font-regular">✉️<a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a></p>
            </section>
        </main>
    );
};
export default JobDetails;
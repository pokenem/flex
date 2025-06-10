import React from 'react';
import { motion } from 'framer-motion';
import './ZkusenostiSection.css';

const zkusenosti = [
    {
        title: 'OEM',
        image: process.env.PUBLIC_URL + '/assets/about2.jpg',
        text: `Náš tým tvoří odborníci s praktickými zkušenostmi přímo z provozu předních světových výrobců automobilů (ŠKODA AUTO, Jaguar Land Rover, BMW, Mercedes-Benz), kde jsme se aktivně podíleli na:
        <ul>
        <li>zavádění nových výrobních projektů (launch support),</li>
        <li>analýze a řešení kvalitativních odchylek (reklamace, 8D reporty),</li>
        <li>kontrole kvality a rework činnostech ve vysokém taktu výroby,</li>
        <li>podpoře technických oddělení při implementaci změn (engineering change management),</li>
        <li>komunikaci se zákazníky a dodavateli v rámci procesů jako PPAP, APQP, FMEA nebo VDA 6.3 auditů.</li>
        </ul>
        Díky těmto zkušenostem rozumíme vysokým nárokům OEM výroby na preciznost, rychlost reakce a schopnost samostatně řešit problémy přímo v provozu. Naši pracovníci jsou zvyklí fungovat v prostředí s přísnými standardy kvality a důsledně dodržovat pravidla bezpečnosti, pořádku a organizace práce.`
    },
    {
        title: 'TIER 1',
        image: process.env.PUBLIC_URL + '/assets/about2.jpg',
        text: `Zaměstnanci společnosti Flexility services s.r.o. přinášejí bohaté zkušenosti nejen z výrobních závodů předních světových automobilek, ale i z provozů klíčových Tier 1 dodavatelů (Faurecia, Magna, Bosch, Continental, Lear, Adient aj.).<br/>
        <ul>
        <li>řízení kvality a zákaznického servisu,</li>
        <li>kontroly a měření dílů dle výkresové dokumentace a CAD,</li>
        <li>řešení neshod a vedení reklamací (8D, Ishikawa, 5 Why),</li>
        <li>tvorby a úprav FMEA, kontrolních plánů (CP), pracovních instrukcí,</li>
        <li>zavádění nových projektů dle norem IATF 16949 a VDA 6.3,</li>
        <li>logistiky a podpory výroby (balení, značení, materiálový tok).</li>
        </ul>
        Díky těmto zkušenostem dokážeme rychle pochopit specifika jednotlivých výrobních procesů a přizpůsobit se jak náročnému prostředí OEM, tak i flexibilním požadavkům dodavatelských řetězců Tier 1.`
    }
];

const ZkusenostiSection: React.FC = () => (
    <section className="zkusenosti-section">
        <h2 className="zkusenosti-title text-4xl font-medium">Zkušenosti našeho personálu</h2>
        <div className="zkusenosti-grid">
            {zkusenosti.map((z, i) => (
                <motion.div
                    className="zkusenosti-card"
                    key={z.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img src={z.image} alt={z.title} className="zkusenosti-img" />
                    <h3 className="zkusenosti-card-title text-xl font-regular">{z.title}</h3>
                    <div className="zkusenosti-card-desc text-base font-thin" dangerouslySetInnerHTML={{__html: z.text}} />
                </motion.div>
            ))}
        </div>
    </section>
);

export default ZkusenostiSection; 
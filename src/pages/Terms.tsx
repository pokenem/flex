import React from 'react';
import './Terms.css'; // если нужны стили, можешь подключить

const Terms: React.FC = () => (
    <div className="terms-container p-2">
        <h1 className="text-4xl font-medium u-text-center u-mb-1">Všeobecné obchodné podmienky</h1>

        <section className="u-mb-1">
            <h2 className="text-2xl font-regular u-mb-1">1. Úvod</h2>
            <p className="text-base font-light">
                Tieto všeobecné obchodné podmienky upravujú používanie tejto webovej stránky a podmienky poskytovania našich služieb.
                Vstupom na túto stránku súhlasíte s týmito podmienkami v plnom rozsahu.
            </p>
        </section>

        <section className="u-mb-1">
            <h2 className="text-2xl font-regular u-mb-1">2. Služby</h2>
            <p className="text-base font-light">
                Naša spoločnosť poskytuje služby v oblasti technickej podpory, marketingu a zákazníckeho servisu.
                Vyhradzujeme si právo kedykoľvek zmeniť alebo pozastaviť poskytovanie služieb bez predchádzajúceho upozornenia.
            </p>
        </section>

        <section className="u-mb-1">
            <h2 className="text-2xl font-regular u-mb-1">3. Ochrana osobných údajov</h2>
            <p className="text-base font-light">
                Vaše osobné údaje sú spracúvané v súlade s platnými zákonmi SR a GDPR.
                Viac informácií nájdete v našich zásadách ochrany osobných údajov.
            </p>
        </section>

        <section className="u-mb-1">
            <h2 className="text-2xl font-regular u-mb-1">4. Zodpovednosť</h2>
            <p className="text-base font-light">
                Nie sme zodpovední za akékoľvek priame alebo nepriame škody vzniknuté používaním tejto stránky alebo našich služieb.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-regular u-mb-1">5. Kontakt</h2>
            <p className="text-base font-light">
                V prípade otázok nás môžete kontaktovať prostredníctvom kontaktného formulára alebo emailom na info@example.sk.
            </p>
        </section>
    </div>
);

export default Terms;

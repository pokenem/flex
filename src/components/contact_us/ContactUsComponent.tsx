import React, { useState } from 'react';

// Интерфейс для данных формы
interface ContactFormData {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phoneNumber: string;
    message: string;
    agreeToPrivacy: boolean;
}

// Компонент ContactUs
const ContactUsComponent: React.FC = () => {
    // Состояние формы
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeToPrivacy: false,
    });

    // Состояние ошибок
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});
    // Состояние отправки
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Обработчик изменения полей
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Валидация формы
    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.agreeToPrivacy) newErrors.agreeToPrivacy = false;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Обработчик отправки формы
    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('YOUR_STRAPI_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                // Здесь можно добавить очистку формы или сообщение об успехе
                setFormData({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    agreeToPrivacy: false,
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="app-main">
            <div className="u-text-center u-mb-1">
                <h1 className="text-4xl font-medium">Contact sales</h1>
                <p className="text-base font-light">
                    Aute magna iure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <div className="p-4">
                <div className="flex">
                    <div className="p-2">
                        <label className="text-sm font-light">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-1"
                        />
                        {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                    <div className="p-2">
                        <label className="text-sm font-light">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="p-1"
                        />
                        {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                </div>
                <div className="p-2">
                    <label className="text-sm font-light">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="p-1"
                    />
                    {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                </div>
                <div className="p-2">
                    <label className="text-sm font-light">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-1"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>
                <div className="p-2">
                    <label className="text-sm font-light">Phone number</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="p-1"
                        placeholder="US ~ 123-456-7890"
                    />
                    {errors.phoneNumber && <p className="text-xs text-red-500">{errors.phoneNumber}</p>}
                </div>
                <div className="p-2">
                    <label className="text-sm font-light">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-1"
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>
                <div className="p-2">
                    <label className="text-sm font-light">
                        <input
                            type="checkbox"
                            name="agreeToPrivacy"
                            checked={formData.agreeToPrivacy}
                            onChange={handleChange}
                        />
                        By selecting this, you agree to our privacy policy.
                    </label>
                    {errors.agreeToPrivacy && (
                        <p className="text-xs text-red-500">{errors.agreeToPrivacy}</p>
                    )}
                </div>
                <div className="u-text-center">
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="p-2 bg-purple-600 text-white rounded"
                    >
                        {isSubmitting ? 'Sending...' : "Let's talk"}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default ContactUsComponent;
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    } else if (formData.subject.length <= 5) {
      newErrors.subject = 'El asunto debe tener más de 5 caracteres';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length <= 5) {
      newErrors.message = 'El mensaje debe tener más de 5 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Envíanos un Mensaje</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className={`w-full bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
            />
            {errors.name && <p className="text-red-500 text-sm pl-1">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
            />
            {errors.email && <p className="text-red-500 text-sm pl-1">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Asunto"
            className={`w-full bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors ${errors.subject ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
          />
          {errors.subject && <p className="text-red-500 text-sm pl-1">{errors.subject}</p>}
        </div>

        <div className="space-y-2">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Mensaje"
            className={`w-full bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-gray-400 border rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
          />
          {errors.message && <p className="text-red-500 text-sm pl-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
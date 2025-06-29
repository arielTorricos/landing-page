export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
      <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Asunto"
          className="w-full bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
          required
        />
        <textarea
          rows={4}
          placeholder="Mensaje"
          className="w-full bg-slate-700 text-white placeholder-gray-400 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}
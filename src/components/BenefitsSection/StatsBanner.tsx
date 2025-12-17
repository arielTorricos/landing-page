export default function StatsBanner() {
  return (
    <div className="bg-gradient-to-br from-primary-600/10 to-primary-400/5 dark:from-primary-600/30 dark:to-primary-400/10 rounded-3xl p-8 backdrop-blur-sm border border-slate-200 dark:border-white/10">
      <div className="text-center">
        <div className="text-6xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
          +500%
        </div>
        <p className="text-2xl text-slate-900 dark:text-white font-semibold mb-4">Crecimiento Promedio</p>
        <p className="text-slate-600 dark:text-gray-300 mb-8">
          Nuestros clientes experimentan un crecimiento promedio del 500% en su presencia digital
        </p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-slate-100 dark:bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-primary-500 dark:text-primary-400">98%</div>
            <div className="text-sm text-slate-600 dark:text-gray-300">Retención</div>
          </div>
          <div className="bg-slate-100 dark:bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-secondary-500 dark:text-secondary-400">4.9★</div>
            <div className="text-sm text-slate-600 dark:text-gray-300">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function StatsBanner() {
  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
      <div className="text-center">
        <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          +500%
        </div>
        <p className="text-2xl text-white font-semibold mb-4">Crecimiento Promedio</p>
        <p className="text-gray-300 mb-8">
          Nuestros clientes experimentan un crecimiento promedio del 500% en su presencia digital
        </p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-400">98%</div>
            <div className="text-sm text-gray-300">Retención</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-pink-400">4.9★</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}
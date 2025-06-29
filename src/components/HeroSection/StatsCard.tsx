interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
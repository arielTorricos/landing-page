import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-xl">
        <Zap className="h-8 w-8 text-white" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Landing Ariel Torricos
      </span>
    </div>
  );
}
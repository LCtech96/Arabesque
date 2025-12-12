'use client';

interface Highlight {
  id: string;
  title: string;
  emoji: string;
}

const highlights: Highlight[] = [
  { id: '1', title: 'Ingredienti', emoji: '🐟' },
  { id: '2', title: 'Allergeni', emoji: '⚠️' },
  { id: '3', title: 'Vegan/Gluten Free', emoji: '🌱' },
  { id: '4', title: 'Best Seller', emoji: '⭐' },
];

export default function Highlights() {
  return (
    <div className="flex justify-center space-x-4 md:space-x-6 mt-6 mb-8 px-4">
      {highlights.map((highlight) => (
        <div
          key={highlight.id}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <span className="text-2xl md:text-3xl">{highlight.emoji}</span>
            </div>
          </div>
          <span className="mt-2 text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium text-center max-w-[60px] md:max-w-[80px]">
            {highlight.title}
          </span>
        </div>
      ))}
    </div>
  );
}


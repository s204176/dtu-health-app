import { useState } from 'react';
import { Link } from 'react-router-dom';
import { healthResources, categories } from '../data/healthResources';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredResources = selectedCategory === 'Alle'
    ? healthResources
    : healthResources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-dtu-red text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">DTU Sundhedsressourcer</h1>
          <p className="text-gray-100 text-sm">Din guide til velvære på DTU</p>
        </div>
      </header>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-dtu-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map(resource => (
            <Link
              key={resource.id}
              to={`/resource/${resource.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="text-5xl mb-4">{resource.icon}</div>

                {/* Title and Category */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h2>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-dtu-red bg-red-50 rounded-full mb-3">
                  {resource.category}
                </span>

                {/* Short Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {resource.shortDescription}
                </p>

                {/* Location */}
                {resource.location && (
                  <div className="flex items-start text-gray-500 text-sm">
                    <span className="mr-2">📍</span>
                    <span>{resource.location}</span>
                  </div>
                )}
              </div>

              {/* View Details Button */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <span className="text-dtu-red font-medium text-sm flex items-center">
                  Se detaljer
                  <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Ingen ressourcer fundet i denne kategori.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p>Brug for hjælp? Kontakt DTU Studieservice</p>
          <p className="mt-2">Telefon: +45 45 25 25 25 | Email: info@dtu.dk</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

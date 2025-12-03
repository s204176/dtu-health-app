import { useParams, Link, useNavigate } from 'react-router-dom';
import { healthResources } from '../data/healthResources';

function ResourceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = healthResources.find(r => r.id === id);

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ressource ikke fundet</h1>
          <Link to="/" className="text-dtu-red hover:underline">
            Tilbage til forsiden
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <header className="bg-dtu-red text-white py-4 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
          >
            <span className="text-xl mr-2">←</span>
            <span className="font-medium">Tilbage</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="text-6xl">{resource.icon}</span>
            <div>
              <h1 className="text-3xl font-bold mb-1">{resource.title}</h1>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
                {resource.category}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Description Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Om</h2>
            <p className="text-gray-700 leading-relaxed">{resource.description}</p>
          </div>

          {/* Information Grid */}
          <div className="p-6 space-y-6">
            {/* Location */}
            {resource.location && (
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-2xl">
                  📍
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    Lokation
                  </h3>
                  <p className="text-gray-900 font-medium">{resource.location}</p>
                </div>
              </div>
            )}

            {/* Opening Hours */}
            {resource.hours && (
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    Åbningstider
                  </h3>
                  <p className="text-gray-900 font-medium">{resource.hours}</p>
                </div>
              </div>
            )}

            {/* Contact */}
            {resource.contact && (
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-2xl">
                  📞
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    Kontakt
                  </h3>
                  <p className="text-gray-900 font-medium">{resource.contact}</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            {resource.hasRegistration && (
              <a
                href={resource.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-dtu-red hover:bg-dtu-dark-red text-white text-center font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-md mb-3"
              >
                Book tid
              </a>
            )}
            {resource.link && (
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-gray-50 border-2 border-dtu-red text-dtu-red text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Besøg hjemmeside
              </a>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button
            onClick={() => window.location.href = `tel:+4545252525`}
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
          >
            <span className="mr-2">📞</span>
            Ring til DTU
          </button>
          <button
            onClick={() => window.location.href = `mailto:info@dtu.dk`}
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center"
          >
            <span className="mr-2">✉️</span>
            Email
          </button>
        </div>

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-dtu-red hover:text-dtu-dark-red font-medium inline-flex items-center"
          >
            <span className="mr-2">←</span>
            Se alle ressourcer
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ResourceDetail;

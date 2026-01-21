import { useOlympic } from '../hooks/useOlympic.js';

export default function Home() {
  const { olympics, loading, error } = useOlympic();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Loading Olympic data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-red-600">
          Error: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Olympic Games App</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        {olympics.length} countries data loaded
      </p>

      <div className="space-y-8">
        {olympics.map((olympic) => (
          <div key={olympic.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              {olympic.country}
            </h2>
            <div className="space-y-4">
              {olympic.participations.map((participation) => (
                <div
                  key={participation.id}
                  className="border-l-4 border-blue-400 pl-4 py-2"
                >
                  <p className="font-semibold text-lg">
                    JO de {participation.city} - {participation.year}
                  </p>
                  <p className="text-gray-700">
                    {participation.athleteCount} participants ont remporté{' '}
                    {participation.medalsCount} médailles
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Tasks } from "./components/Tasks";

export const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-row space-x-4">
        <Tasks />
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 bg-gradient-to-r from-green-600 to-green-400">
            <h2 className="text-lg font-semibold text-white">
              Anwesenheitsstatistik
            </h2>
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-600 mb-2">
              Fehlende Entschuldigungen
            </p>
            <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center text-gray-500 text-xs">
              Attendance data
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-400">
            <h2 className="text-lg font-semibold text-white">
              Leistungsübersicht
            </h2>
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-600 mb-2">Leistungsübersicht</p>
            <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center text-gray-500 text-xs">
              Performance data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import data from "../../../dummy-data/terms_and_classes_en.json";
import { useState } from "react";

type Event = {
  title: string;
  date: string;
  time: string;
  description: string;
};

type Class = {
  name: string;
  teacher: string;
  events: Event[];
  id: number;
};

type ClassData = {
  classes: Class[];
};

const formatDate = (date: string): string => {
  const splittedDate = date.split("-").splice(1, 2).reverse();
  return splittedDate.join("-");
};

export const Dashboard = () => {
  const classData: ClassData = data;
  const [activeClassID, setActiveClassID] = useState(classData.classes[0].id);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-row space-x-4">
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-400">
            <h2 className="text-lg font-semibold text-white">
              Termine und Aufgaben
            </h2>
          </div>
          <div className="p-3 max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="flex mb-4 space-x-2 overflow-x-auto">
              {classData.classes.map((classItem, index) => (
                <button
                  key={index}
                  className={`${activeClassID === classItem.id ? "bg-blue-400 text-white" : "text-gray-600"} px-3 py-1 rounded-full text-xs font-medium  hover:bg-gray-100 transition-colors duration-200`}
                  onClick={() => setActiveClassID(classItem.id)}
                >
                  {classItem.name}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {classData.classes[activeClassID].events.map(
                (event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-blue-600 text-sm">
                        {event.title}
                      </h4>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                        {formatDate(event.date)} • {event.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-700">
                      {event.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

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

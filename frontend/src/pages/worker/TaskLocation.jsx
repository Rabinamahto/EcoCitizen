
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function TaskLocation() {
  const { id } = useParams();

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const task = {
    id: id,
    title: "Garbage Overflow",
    location: "Ward 12, Muzaffarpur",
    latitude: 26.1209,
    longitude: 85.3647,
  };

  const getCurrentLocation = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        setLoading(false);
      },
      () => {
        alert("Unable to get your current location.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to={`/worker/tasks/${task.id}`}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Task Details
        </Link>

        <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
          Task Location
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View complaint location and your current location.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">

        {/* Complaint Location */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800">
            Complaint Location
          </h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-gray-500">
                Complaint ID
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {task.id}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Problem
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {task.title}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Address
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                📍 {task.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Latitude
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {task.latitude}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Longitude
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {task.longitude}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={getCurrentLocation}
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Getting Location..."
              : "📍 Get My Current Location"}
          </button>

          {location && (
            <div className="mt-5 rounded-lg bg-green-50 p-4">
              <h3 className="font-semibold text-green-800">
                Your Current Location
              </h3>

              <p className="mt-2 text-sm text-gray-700">
                Latitude: {location.latitude}
              </p>

              <p className="mt-1 text-sm text-gray-700">
                Longitude: {location.longitude}
              </p>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-lg font-bold text-gray-800">
              Complaint Location Map
            </h2>
          </div>

          <iframe
            title="Complaint Location"
            className="h-[450px] w-full"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${
              task.longitude - 0.02
            }%2C${
              task.latitude - 0.02
            }%2C${
              task.longitude + 0.02
            }%2C${
              task.latitude + 0.02
            }&layer=mapnik&marker=${
              task.latitude
            }%2C${
              task.longitude
            }`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TaskLocation;
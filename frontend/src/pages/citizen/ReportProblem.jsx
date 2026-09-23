import { useState } from "react";
import api from "../../services/api";
import {
  Camera,
  MapPin,
  Upload,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Send,
} from "lucide-react";

function ReportProblem() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported by your browser.");
      return;
    }

    setMessage("Detecting your location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setMessage("Location detected successfully.");
      },
      () => {
        setMessage("Unable to get your location. Please allow location access.");
      }
    );
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!category || !description || !latitude || !longitude) {
      setMessage("Please fill all required fields and add your location.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await api.post("/complaints", {
        category,
        description,
        latitude,
        longitude,
      });

      setMessage(response.data.message);

      setCategory("");
      setDescription("");
      setLatitude("");
      setLongitude("");
      setPhoto(null);
      setPreview("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">

        

      {/* Main */}
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">

        {/* Page heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Citizen Report
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Report a Local Problem
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Help improve your community by reporting an environmental or
            civic issue. Add a photo, describe the problem and share its
            location.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <form onSubmit={handleSubmit}>

            {/* Step 1 */}
            <div className="border-b border-slate-200 p-6 sm:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                  1
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    What is the problem?
                  </h3>
                  <p className="text-sm text-slate-500">
                    Select the category and describe the issue.
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Problem Category
                </label>

                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="">Select a category</option>
                  <option value="garbage">Garbage / Waste</option>
                  <option value="water">Water Leakage</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="pollution">Pollution</option>
                  <option value="road">Road Damage</option>
                  <option value="streetlight">Streetlight</option>
                  <option value="public-space">Public Space</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Describe the Problem
                </label>

                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows="5"
                  placeholder="Example: Garbage has been lying near the road for several days..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Please provide enough details so the concerned team can
                  understand the issue.
                </p>
              </div>

            </div>

            {/* Step 2 */}
            <div className="border-b border-slate-200 p-6 sm:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                  2
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Add Evidence
                  </h3>
                  <p className="text-sm text-slate-500">
                    A photo helps authorities understand the problem.
                  </p>
                </div>
              </div>

              {/* Photo Upload */}
              <label
                htmlFor="photo"
                className="block cursor-pointer rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center transition hover:border-emerald-400 hover:bg-emerald-50"
              >
                {preview ? (
                  <div>
                    <img
                      src={preview}
                      alt="Problem preview"
                      className="mx-auto max-h-64 rounded-xl object-cover"
                    />

                    <p className="mt-3 text-sm font-medium text-emerald-600">
                      Photo selected
                    </p>

                    <p className="text-xs text-slate-400">
                      Click to change photo
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Camera size={26} />
                    </div>

                    <p className="font-semibold text-slate-700">
                      Upload a photo
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Click here to choose a photo from your device
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                      <Upload size={16} />
                      Choose Photo
                    </div>
                  </>
                )}

                <input
                  id="photo"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>

              <p className="mt-3 text-xs text-slate-400">
                JPG, PNG or other image formats supported.
              </p>

            </div>

            {/* Step 3 */}
            <div className="p-6 sm:p-8">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                  3
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Problem Location
                  </h3>
                  <p className="text-sm text-slate-500">
                    Your location helps route the report to the correct
                    local authority.
                  </p>
                </div>
              </div>

              {/* Location box */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        Report Location
                      </p>

                      <p className="text-sm text-slate-500">
                        Use your current location
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={getLocation}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    <MapPin size={18} />
                    Get My Location
                  </button>

                </div>

                {/* Coordinates */}
                {(latitude || longitude) && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-medium text-slate-400">
                        LATITUDE
                      </p>
                      <p className="mt-1 font-mono text-sm text-slate-700">
                        {latitude}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-medium text-slate-400">
                        LONGITUDE
                      </p>
                      <p className="mt-1 font-mono text-sm text-slate-700">
                        {longitude}
                      </p>
                    </div>

                  </div>
                )}

              </div>

              {/* Message */}
              {message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-xl p-4 ${
                    message.toLowerCase().includes("success")
                      ? "bg-emerald-50 text-emerald-700"
                      : message.toLowerCase().includes("failed") ||
                        message.toLowerCase().includes("unable") ||
                        message.toLowerCase().includes("required")
                      ? "bg-red-50 text-red-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {message.toLowerCase().includes("success") ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}

                  <p className="text-sm font-medium">
                    {message}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={19} />

                {loading ? "Submitting..." : "Submit Complaint"}
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your report will be routed to the relevant local authority.
              </p>

            </div>

          </form>
        </div>

        {/* Bottom note */}
        <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-center">
          <p className="text-sm text-emerald-800">
            🌱 Every report helps make our communities cleaner, safer and
            better.
          </p>
        </div>

      </main>
    </div>
  );
}

export default ReportProblem;
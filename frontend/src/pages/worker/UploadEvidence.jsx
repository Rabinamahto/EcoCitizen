
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function UploadEvidence() {
  const { id } = useParams();

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!photo) {
      alert("Please upload a resolution photo.");
      return;
    }

    alert("Evidence uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to={`/worker/progress/${id}`}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Work Progress
        </Link>

        <h1 className="mt-3 text-2xl font-bold text-gray-800 md:text-3xl">
          Upload Resolution Evidence
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Upload a photo after completing the assigned work.
        </p>
      </div>

      <div className="max-w-2xl rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
        <div className="mb-6 rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">Complaint ID</p>

          <p className="mt-1 font-semibold text-gray-800">
            {id}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Photo Upload */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Resolution Photo
            </label>

            <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 text-center hover:border-green-500">
              <span className="text-4xl">📷</span>

              <span className="mt-3 text-sm font-medium text-gray-700">
                Click to upload photo
              </span>

              <span className="mt-1 text-xs text-gray-500">
                JPG, JPEG or PNG
              </span>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold text-gray-700">
                Photo Preview
              </p>

              <img
                src={preview}
                alt="Resolution preview"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="mt-6">
            <label className="text-sm font-semibold text-gray-700">
              Work Description
            </label>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Describe the work completed..."
              rows="5"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            Upload Evidence
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadEvidence;
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit3,
  Lock,
  LogOut,
  Save,
  X,
} from "lucide-react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Rabina Kumari",
    email: "rabina@example.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra",
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information and account settings.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* Profile Header */}
          <div className="bg-green-50 px-6 py-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-600 text-3xl font-bold text-white">
                {profile.name.charAt(0)}
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  {profile.name}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  Citizen
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Member of EcoCitizen
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="p-6">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>

                <p className="text-sm text-gray-500">
                  Your basic account information
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  <Edit3 size={17} />
                  Edit
                </button>
              )}
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:text-gray-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:text-gray-600"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:text-gray-600"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 disabled:text-gray-600"
                  />
                </div>
              </div>

            </div>

            {/* Edit Actions */}
            {isEditing && (
              <div className="mt-6 flex justify-end gap-3 border-t border-gray-100 pt-5">

                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <X size={17} />
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                >
                  <Save size={17} />
                  Save Changes
                </button>

              </div>
            )}
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h3 className="text-lg font-semibold text-gray-900">
            Account Settings
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account security and session.
          </p>

          <div className="mt-5 space-y-3">

            <button className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-4 text-left transition hover:bg-gray-50">
              <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                <Lock size={20} />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  Change Password
                </p>

                <p className="text-sm text-gray-500">
                  Update your account password
                </p>
              </div>
            </button>

            <button className="flex w-full items-center gap-4 rounded-xl border border-red-100 p-4 text-left transition hover:bg-red-50">
              <div className="rounded-lg bg-red-100 p-2 text-red-600">
                <LogOut size={20} />
              </div>

              <div>
                <p className="font-medium text-red-600">
                  Logout
                </p>

                <p className="text-sm text-gray-500">
                  Sign out from your account
                </p>
              </div>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
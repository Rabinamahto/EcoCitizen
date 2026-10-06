import { useState } from "react";
import {
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
  Trash2,
  Check,
  Filter,
} from "lucide-react";

function Notifications() {
  const [filter, setFilter] = useState("All");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Complaint Resolved",
      message:
        "Your complaint EC-1024 has been resolved by the field team.",
      time: "10 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "progress",
      title: "Complaint In Progress",
      message:
        "Your complaint EC-1021 is currently being worked on.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Complaint Assigned",
      message:
        "Your complaint EC-1018 has been assigned to the concerned field team.",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Complaint Verified",
      message:
        "Your complaint EC-1015 has been successfully verified.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      type: "warning",
      title: "Action Required",
      message:
        "Additional information may be required for complaint EC-1012.",
      time: "3 days ago",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const filteredNotifications =
    filter === "Unread"
      ? notifications.filter((notification) => !notification.read)
      : notifications;

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (type) => {
    if (type === "success") {
      return <CheckCircle size={22} />;
    }

    if (type === "progress") {
      return <Clock size={22} />;
    }

    if (type === "warning") {
      return <AlertCircle size={22} />;
    }

    return <Bell size={22} />;
  };

  const getIconStyle = (type) => {
    if (type === "success") {
      return "bg-green-100 text-green-600";
    }

    if (type === "progress") {
      return "bg-yellow-100 text-yellow-600";
    }

    if (type === "warning") {
      return "bg-red-100 text-red-600";
    }

    return "bg-blue-100 text-blue-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <Bell size={25} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Notifications
                </h1>

                <p className="text-sm text-gray-500">
                  Stay updated about your complaints
                </p>
              </div>
            </div>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              <Check size={17} />
              Mark all as read
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Notifications</p>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              {notifications.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Unread</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {unreadCount}
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-4 flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />

          <button
            onClick={() => setFilter("All")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              filter === "All"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Unread")}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              filter === "Unread"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Unread
          </button>
        </div>

        {/* Notifications List */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {filteredNotifications.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <Bell
                size={40}
                className="mx-auto mb-3 text-gray-300"
              />

              <h3 className="text-lg font-semibold text-gray-700">
                No notifications
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                You are all caught up.
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex gap-4 border-b border-gray-100 p-5 last:border-b-0 ${
                  !notification.read ? "bg-green-50/40" : "bg-white"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${getIconStyle(
                    notification.type
                  )}`}
                >
                  {getIcon(notification.type)}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-green-600" />
                        )}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {notification.message}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        {notification.time}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {!notification.read && (
                        <button
                          onClick={() =>
                            markAsRead(notification.id)
                          }
                          title="Mark as read"
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-green-100 hover:text-green-600"
                        >
                          <Check size={17} />
                        </button>
                      )}

                      <button
                        onClick={() =>
                          deleteNotification(notification.id)
                        }
                        title="Delete notification"
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Notifications;
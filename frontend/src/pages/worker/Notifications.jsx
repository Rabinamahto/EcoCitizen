import { Link } from "react-router-dom";

function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Task Assigned",
      message: "A new Garbage Overflow task has been assigned to you.",
      time: "10 minutes ago",
      type: "task",
      unread: true,
    },
    {
      id: 2,
      title: "Task Deadline Reminder",
      message: "Your Water Leakage task deadline is today.",
      time: "1 hour ago",
      type: "warning",
      unread: true,
    },
    {
      id: 3,
      title: "Task Accepted",
      message: "Your assigned task has been accepted successfully.",
      time: "3 hours ago",
      type: "success",
      unread: false,
    },
    {
      id: 4,
      title: "Task Under Verification",
      message: "Your completed task is waiting for officer verification.",
      time: "Yesterday",
      type: "info",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="mb-6">
        <Link
          to="/worker/dashboard"
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-3">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Notifications
          </h1>

          <p className="mt-1 text-sm text-gray-500 md:text-base">
            Stay updated about your tasks and work.
          </p>
        </div>
      </div>

      <div className="max-w-4xl space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl border bg-white p-5 shadow-sm ${
              notification.unread
                ? "border-green-200"
                : "border-gray-200"
            }`}
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
                {notification.type === "task" && "📋"}
                {notification.type === "warning" && "⚠️"}
                {notification.type === "success" && "✅"}
                {notification.type === "info" && "ℹ️"}
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="font-semibold text-gray-800">
                    {notification.title}
                  </h2>

                  {notification.unread && (
                    <span className="w-fit rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                      New
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {notification.message}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {notification.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
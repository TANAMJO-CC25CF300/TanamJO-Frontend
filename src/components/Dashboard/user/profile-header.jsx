const ProfileHeader = ({ user, finishedTasks = [] }) => {
  const getAvatarStyle = (gender) => {
    if (gender === "male") return "micah";
    if (gender === "female") return "adventurer";
    return "adventurer";
  };

  const avatarStyle = getAvatarStyle(user.gender);

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 bg-white rounded-[20px] shadow-sm p-8">
      {/* Foto Profil & Nama */}
      <div className="flex flex-col items-center">
        <img
          src={`https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${encodeURIComponent(
            user.name || "user"
          )}`}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-3"
        />
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            PLANT LOVER
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Growth Point: {user.userPoints}
        </p>
      </div>

      {/* Progress Bar */}
      <div
        className="rounded-lg p-4 mb-6 shadow-lg"
        style={{
          boxShadow:
            "0 4px 24px 0 rgba(34,197,94,0.25), 0 1.5px 8px 0 rgba(236,72,153,0.15)",
        }}
      >
        <div className="flex justify-between items-center text-xs font-semibold mb-2">
          <span>POINT</span>
          <span className="flex items-center gap-1">
            <svg
              className="text-yellow-400"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
            {user.userPoints}/1000
          </span>
        </div>
        <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-6 rounded-full transition-all duration-500"
            style={{
              width: `${(user.userPoints / 1000) * 100}%`,
              background: "linear-gradient(90deg, #34d399 0%, #f472b6 100%)",
              boxShadow: "0 0 10px 2px #34d399, 0 0 20px 4px #f472b6",
            }}
          />
          {/* Progress Text in the middle */}
          <div className="absolute w-full h-6 flex items-center justify-center font-bold text-white text-sm drop-shadow">
            {user.userPoints} pts
          </div>
          {/* Star icon at the end of progress */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(${(user.userPoints / 1000) * 100}% - 14px)`,
              transition: "left 0.5s",
            }}
          >
            <svg
              className="text-yellow-400 drop-shadow"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Current speed:{" "}
          <span className="font-semibold text-pink-500">50 points/day</span>
        </div>
      </div>

      {/* Finished Daily Tasks */}
      <div>
        <div className="font-semibold mb-2">Finished Daily Tasks</div>
        <div className="flex flex-col gap-3">
          {finishedTasks.length === 0 && (
            <div className="text-gray-400 text-sm italic">
              No finished tasks today.
            </div>
          )}
          {finishedTasks.map((task, idx) => (
            <div
              key={task.id}
              className={`flex items-center gap-2 md:gap-4 rounded-xl shadow-sm bg-white overflow-hidden ${
                idx !== finishedTasks.length - 1 ? "mb-2" : ""
              }`}
            >
              <div
                className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md border-2 ml-2 md:ml-4 bg-green-600 border-green-700"
                style={{ minWidth: 40, minHeight: 40 }}
              >
                {/* Centang */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 px-2 md:px-5 py-2 md:py-3 flex flex-col justify-center gap-1 md:gap-2">
                <span className="font-medium text-sm md:text-base text-black line-clamp-2">
                  {task.title}
                </span>
                <div className="flex items-center gap-1 md:gap-2 mt-1">
                  {/* Icon point */}
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fbbf24" />
                    <text
                      x="12"
                      y="16"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      P
                    </text>
                  </svg>
                  <span className="text-[10px] md:text-xs text-gray-500">
                    +{task.point} growth point
                  </span>
                </div>
              </div>
              <div className="pr-2 md:pr-4 text-[10px] md:text-xs text-gray-400 whitespace-nowrap">
                {task.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

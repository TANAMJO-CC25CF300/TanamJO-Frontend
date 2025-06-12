const ProfileHeader = ({ user, finishedTasks = [] }) => {
  const getAvatarStyle = (gender) => {
    if (gender === "male") return "micah";
    if (gender === "female") return "adventurer";
    return "adventurer";
  };

  const avatarStyle = getAvatarStyle(user.gender);

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 bg-white rounded-[20px] shadow-sm p-8">
      {/* Profile & Name */}
      <div className="flex flex-col items-center">
        <img
          src={`https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${encodeURIComponent(
            user.name || "user"
          )}`}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-3"
        />
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold text-gray-900">{user.name || "Meilyan Siwy"}</h1>
          <span className="bg-[#4F7942] text-white text-xs font-semibold px-3 py-1 rounded-full">
            PLANT LOVER
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Growth Point: {user.userPoints || 150}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-sm font-semibold mb-2">
          <span>POINT</span>
          <span>{user.userPoints || 150}/1000</span>
        </div>
        <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
            style={{
              width: `${((user.userPoints || 150) / 1000) * 100}%`,
              background: "#FF69B4",
            }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Current speed: <span className="font-semibold">50 points/day</span>
        </div>
      </div>

      {/* Finished Daily Tasks */}
      <div>
        <div className="font-semibold mb-4">Finished Daily Tasks</div>
        <div className="flex flex-col gap-3">
          {finishedTasks.length === 0 && (
            <div className="text-gray-400 text-sm italic">
              No finished tasks today.
            </div>
          )}
          {finishedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-3 bg-white rounded-lg"
            >
              <div className="flex-shrink-0 ml-2">
                <div className="w-6 h-6 bg-[#4F7942] rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <div className="flex-grow py-2">
                <div className="text-sm font-medium line-clamp-2">
                  {task.title}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-gray-500">
                    +{task.point} growth point
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-400 pr-4">{task.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

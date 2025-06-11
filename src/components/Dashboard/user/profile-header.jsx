const ProfileHeader = ({ user }) => {

    
    return (
        <div className="mb-8 bg-white rounded-[20px] shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-[#0098C3] flex items-center justify-center text-white text-4xl font-semibold">
                {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{user.email}</p>
              <div className="flex flex-col md:flex-row gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  Level: {user.userLevel}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700">
                  Points: {user.userPoints}
                </span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProfileHeader;
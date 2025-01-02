import Footer from "../../fragments/Footer/page";

const AchievementPage = () => {
  const achievements = [
    {
      title: "Top Developer",
      description: "Awarded for exceptional performance in 2024.",
      icon: "\u2728",
    },
    {
      title: "Project Leader",
      description:
        "Led a successful project delivery with outstanding results.",
      icon: "\ud83c\udfc6",
    },
    {
      title: "Innovator",
      description: "Developed a solution that increased efficiency by 40%.",
      icon: "\ud83d\udd04",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Achievements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">
                {achievement.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {achievement.title}
              </h2>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementPage;

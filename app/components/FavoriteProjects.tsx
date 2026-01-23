export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 md:py-40">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          I'm Sergio Lissanou, a Software Engineer specializing in full-stack development.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </div>
    </div>
  );
}
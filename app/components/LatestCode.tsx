
export default function LatestCode() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 md:py-40">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
          Latest Code Contributions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Check out my most recent code contributions on GitHub and other platforms.
        </p>
        <a
          href="#latest-code"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition"
        >
          View My Code
        </a>
      </div>
    </div>
  );
}
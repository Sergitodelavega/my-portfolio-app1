export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Sergio Lissanou. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
const MainContent = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to Context API Demo
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          This is a simple demonstration of React's Context API with Tailwind
          CSS. The theme state is managed globally and can be accessed by any
          component without prop drilling. Try clicking the theme toggle button
          in the navbar!
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md
                         hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Feature {item}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                This card demonstrates how the theme context affects nested
                components automatically without any additional configuration.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;

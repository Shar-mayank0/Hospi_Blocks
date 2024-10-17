import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="ml-2 text-xl font-bold">Hospi_Blocks</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              How It Works
            </a>
            <a href="#" className="text-gray-600">
              Use Cases
            </a>
            <a href="#" className="text-gray-600">
              Pricing
            </a>
            <a href="#" className="text-gray-600">
              About Us
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white">
              Store & share medical records securely
            </h1>
            <p className="text-xl text-white mt-4">
              Simplifying healthcare data management for patients and providers.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6">
              Get Started
            </button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold">Features</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-sync-alt text-4xl text-blue-500"></i>
                </div>
                <h3 className="text-2xl font-semibold">Health Data Sync</h3>
                <p className="text-gray-500">Blockchain Integration</p>
                <p className="mt-4 text-gray-700">
                  Automatically sync your health data to a secure blockchain,
                  ensuring privacy and transparency.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-lock text-4xl text-green-500"></i>
                </div>
                <h3 className="text-2xl font-semibold">Share Privately</h3>
                <p className="text-gray-500">Privacy Control</p>
                <p className="mt-4 text-gray-700">
                  Choose exactly who can view your health data, giving you
                  complete control over your information sharing.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-chart-line text-4xl text-pink-500"></i>
                </div>
                <h3 className="text-2xl font-semibold">Real-time Monitoring</h3>
                <p className="text-gray-500">Live Updates</p>
                <p className="mt-4 text-gray-700">
                  Receive real-time updates on your health metrics, allowing you
                  to make informed decisions promptly.
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded mt-8">
              Explore features
            </button>
          </div>
        </section>

        {/* Additional sections can be added here */}
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-bold">Hospi_Blocks</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600">
                Product
              </a>
              <a href="#" className="text-gray-600">
                Resources
              </a>
              <a href="#" className="text-gray-600">
                Company
              </a>
              <a href="#" className="text-gray-600">
                Plans & Pricing
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Input your email"
                className="border px-4 py-2 rounded-l"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600">
                Privacy
              </a>
              <a href="#" className="text-gray-600">
                Terms
              </a>
              <a href="#" className="text-gray-600">
                Sitemap
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-gray-600">© 2024 Brand, Inc.</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-600">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

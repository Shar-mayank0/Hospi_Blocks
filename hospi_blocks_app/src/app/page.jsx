// // components/Navigation.js
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const Navigation = () => {
//   return (
//     <div className="h-64 mt-72 ml-72 pl-72 justify-center align-items-center">
//       <div className="flex flex-col w-48 px-5 ">
//         <Button className="mx-2 my-3 p-7 text-lg">
//           <Link href="/hospital" className="text-white hover:text-gray-300">
//             User Page
//           </Link>
//         </Button>
//         <Button className="mx-2 my-3 p-7 text-lg">
//           <Link href="/hospital" className="text-white hover:text-gray-300">
//             Hospital Page
//           </Link>
//         </Button>
//         <Button className="mx-2 my-3 p-7 px-8 text-lg">
//           <Link href="/admin" className="text-white hover:text-gray-300">
//             Admin Page
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

import React from "react";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="ml-3 text-2xl font-bold text-gray-800">
              Hospi_Blocks
            </span>
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Use Cases
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>

      <main>
        <section
          className="bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi8lf4loMGroBZ8JqAVyE02YAjQkfkXVnuEw&s')",
          }}
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">
              Store & share medical records securely
            </h1>
            <p className="text-xl mb-6">
              Simplifying healthcare data management for patients and providers.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-sync-alt text-4xl text-blue-500"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Health Data Sync
                </h3>
                <p className="text-gray-500 mt-2">Blockchain Integration</p>
                <p className="mt-4 text-gray-600">
                  Automatically sync your health data to a secure blockchain,
                  ensuring privacy and transparency.
                </p>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-lock text-4xl text-green-500"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Share Privately
                </h3>
                <p className="text-gray-500 mt-2">Privacy Control</p>
                <p className="mt-4 text-gray-600">
                  Choose exactly who can view your health data, giving you
                  complete control over your information sharing.
                </p>
              </div>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <div className="flex justify-center mb-4">
                  <i className="fas fa-chart-line text-4xl text-pink-500"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Real-time Monitoring
                </h3>
                <p className="text-gray-500 mt-2">Live Updates</p>
                <p className="mt-4 text-gray-600">
                  Receive real-time updates on your health metrics, allowing you
                  to make informed decisions promptly.
                </p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-12 hover:bg-blue-700">
              Explore features
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/assets/logo.jpg"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="ml-3 text-xl font-bold text-gray-800">
                Hospi_Blocks
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Product
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Company
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Plans & Pricing
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Input your email"
                className="border border-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Privacy
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Terms
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Sitemap
              </a>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-gray-600">© 2024 Brand, Inc.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
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

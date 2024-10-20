import React from "react";
import Image from "next/image";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

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
        </div>
      </header>

      <main>
        <section
          className="bg-contain bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/doctors-with-stethoscopes-nurses-standing-together-smiling-group-female-male-medical-staff-hospital-emergency-team-clinic-flat-vector-illustration-medicine-healthcare-concept_74855-21072.jpg?t=st=1729344139~exp=1729347739~hmac=441f7d501212a11c184a6eb6c6769d037405fbfe8cc7e2dcf5514f454d3eac83&w=1060')",
            // "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r0H1yKNyFSyAQkBPwMbEtJFGFf-SX-DUcg&s')",
            height: "60vh",
          }}
        ></section>

        <div className="text-center text-black px-4 my-10">
          <h1 className="text-3xl font-bold mb-4">
            Store & share medical records securely
          </h1>
          <p className="text-l mb-6">
            Simplifying healthcare data management for patients and providers.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 mr-4">
            <Link href="/admin" className="text-white hover:text-gray-300">
              Admin Page
            </Link>
          </button>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            <Link href="/hospital" className="text-white hover:text-gray-300">
              Hospital Login
            </Link>
          </button>
        </div>

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
              <Link href="/user" className="text-white hover:text-gray-300">
                User Page
              </Link>
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
                alt="logo"
              />
              <span className="ml-3 text-xl font-bold text-gray-800">
                Hospi_Blocks
              </span>
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
            </div>
          </div>
          <div className="flex w-80 justify-between mt-8 ml-14 mb-16">
            <div className="flex flex-col space-y-2">
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
            <div className="flex space-y-2 flex-col ">
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

          <div className="mt-8 ml-8 flex justify-between items-center">
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

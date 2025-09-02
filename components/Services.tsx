// app/services/page.tsx (if using App Router)
// OR pages/services.tsx (if using Pages Router)

import React from "react";

const Services = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-lg text-center mb-10">
          We provide professional and customized solutions to meet your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">Custom Floor Plans</h2>
            <p className="text-gray-600">
              Get personalized 2D & 3D house plans tailored to your requirements and vastu principles.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">3D Elevations</h2>
            <p className="text-gray-600">
              Modern 3D elevation designs that bring your dream home to life before construction.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-3">Web Solutions</h2>
            <p className="text-gray-600">
              Professional websites for architects, builders, and consultants to grow their online presence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

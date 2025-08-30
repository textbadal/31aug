"use client";

import { Home, Layers, Compass, HardHat, Check, Star, Clock, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("planning");

  const services = {
    planning: {
      title: "House Planning",
      price: "₹5,000 - ₹15,000",
      description: "Custom floor plans designed to match your lifestyle with Vastu compliance.",
      icon: Home,
      popular: true,
      features: [
        "2D Floor Plans & Layouts",
        "Vastu-Compliant Design",
        "2-3 Design Options",
        "2 Revisions Included",
        "PDF & CAD File Delivery",
        "Room Dimension Specifications",
        "Furniture Layout Guidance"
      ],
      details: [
        { label: "Delivery Time", value: "3-5 days", icon: Clock },
        { label: "Best For", value: "New construction", icon: FileText }
      ]
    },
    elevation: {
      title: "3D Elevation Design",
      price: "₹8,000 - ₹20,000",
      description: "Modern and photorealistic 3D elevations for your home's exterior.",
      icon: Layers,
      popular: false,
      features: [
        "Photorealistic 3D Renders",
        "Front & Side Elevation Views",
        "Material & Texture Recommendations",
        "3 Design Concepts",
        "3 Revisions Included",
        "HD Image Delivery"
      ],
      details: [
        { label: "Delivery Time", value: "5-7 days", icon: Clock },
        { label: "Best For", value: "Exterior visualization", icon: FileText }
      ]
    },
    vastu: {
      title: "Vastu Consultation",
      price: "₹2,000 - ₹5,000",
      description: "Expert Vastu guidance for home or office layouts.",
      icon: Compass,
      popular: false,
      features: [
        "Plot Analysis & Orientation",
        "Detailed Vastu Report",
        "Online/On-Site Consultation",
        "Remedial Solutions",
        "Room-wise Energy Alignment",
        "Follow-up Support"
      ],
      details: [
        { label: "Delivery Time", value: "1-2 days", icon: Clock },
        { label: "Best For", value: "Vastu compliance", icon: FileText }
      ]
    },
    supervision: {
      title: "Construction Supervision",
      price: "₹15,000/month",
      description: "On-site supervision to ensure quality construction.",
      icon: HardHat,
      popular: false,
      features: [
        "Weekly Site Visits",
        "Progress Reports & Photos",
        "Quality Checks",
        "Contractor Coordination",
        "Budget Monitoring",
        "Final Inspection"
      ],
      details: [
        { label: "Service Type", value: "Ongoing", icon: Clock },
        { label: "Best For", value: "Quality assurance", icon: FileText }
      ]
    }
  };

  const serviceTabs = [
    { id: "planning", label: "Planning", icon: Home },
    { id: "elevation", label: "3D Design", icon: Layers },
    { id: "vastu", label: "Vastu", icon: Compass },
    { id: "supervision", label: "Supervision", icon: HardHat }
  ];

  const currentService = services[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-md">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Build Your <span className="text-blue-600">Dream Home</span> With Confidence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional home design services tailored for Bihar residents - from planning to execution
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Service Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <currentService.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentService.title}</h3>
                </div>
                {currentService.popular && (
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    POPULAR
                  </span>
                )}
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{currentService.price}</div>
                <p className="text-gray-600">{currentService.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {currentService.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                {currentService.details.map((detail, i) => (
                  <div key={i} className="text-center">
                    <detail.icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs text-gray-500">{detail.label}</div>
                    <div className="text-sm font-semibold text-gray-900">{detail.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-colors duration-300"
                >
                  Get Quote
                </Link>
                <a
                  href="tel:+916205820278"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 flex flex-col justify-center text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <currentService.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Choose This Service?</h3>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-300 mr-2" />
                    Expert architects with 10+ years experience
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-300 mr-2" />
                    Customized solutions for your needs
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-300 mr-2" />
                    Timely delivery guaranteed
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-300 mr-2" />
                    Free support during implementation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our experts will help you choose the right service based on your plot size, budget, and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916205820278"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+916205820278"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +91 62058 20278
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Services() {
  const services = [
    {
      title: "Basic House Plan",
      desc: "Simple floor plan with basic layout and Vastu compliance.",
      icon: "🏠",
      price: "₹5,000",
      features: [
        "1 Floor Plan Option",
        "Vastu Compliant Design",
        "2D Layout",
        "1 Revision",
        "PDF Format"
      ],
      popular: false
    },
    {
      title: "Standard House Plan",
      desc: "Detailed floor plans with furniture layout and measurements.",
      icon: "🏡",
      price: "₹12,000",
      features: [
        "2-3 Floor Plan Options",
        "Vastu Compliant Design",
        "Furniture Layout",
        "2 Revisions",
        "PDF & CAD Formats"
      ],
      popular: true
    },
    {
      title: "3D Elevation Design",
      desc: "Modern & realistic 3D exterior designs for your home.",
      icon: "🎨",
      price: "₹15,000",
      features: [
        "Photorealistic 3D Exteriors",
        "Multiple Angle Views",
        "Material & Color Options",
        "3 Revisions",
        "Print-ready HD Images"
      ],
      popular: false
    },
    {
      title: "Complete Home Package",
      desc: "End-to-end solution from planning to execution support.",
      icon: "✨",
      price: "₹25,000",
      features: [
        "Detailed Floor Plans",
        "3D Elevation Design",
        "Vastu Consultation",
        "Construction Guidance",
        "Site Visit (within Patna)"
      ],
      popular: false
    },
    {
      title: "Vastu Consultation",
      desc: "Expert Vastu advice for your home or property.",
      icon: "🧭",
      price: "₹3,000",
      features: [
        "Site Evaluation",
        "Vastu Compliance Report",
        "Remedial Solutions",
        "30-min Consultation",
        "Digital Documentation"
      ],
      popular: false
    },
    {
      title: "Interior Design",
      desc: "Complete interior design solutions for your home.",
      icon: "🛋️",
      price: "₹8,000",
      features: [
        "Furniture Layout Plan",
        "Color Scheme Suggestions",
        "Lighting Plan",
        "2 Revisions",
        "Shopping Guidance"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
          Our Services
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Professional <span className="text-blue-600">Home Design</span> Solutions
        </h2>
        
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Affordable home planning and design services for Bihar residents
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 
                ${service.popular ? 'ring-2 ring-blue-500 border-0' : 'border border-gray-200'}`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Service icon */}
              <div className="text-5xl mb-6">{service.icon}</div>
              
              {/* Service title */}
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              
              {/* Price */}
              <div className="my-6">
                <span className="text-3xl font-extrabold text-blue-600">{service.price}</span>
                <span className="text-gray-500 text-sm ml-1">starting</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">{service.desc}</p>
              
              {/* Features list */}
              <ul className="space-y-3 mb-8 text-left">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                Get Quote
              </button>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included in Every Service?</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm mt-1">All designs are thoroughly checked for structural viability and compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Timely Delivery</h4>
                  <p className="text-gray-600 text-sm mt-1">We respect your time and deliver all projects within the promised timeframe.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                  <p className="text-gray-600 text-sm mt-1">Get personal assistance throughout your project from our expert team.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Free Revisions</h4>
                  <p className="text-gray-600 text-sm mt-1">We offer free revisions to ensure the design perfectly matches your vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing note */}
        <div className="mt-12 p-6 bg-yellow-50 rounded-2xl border border-yellow-200 max-w-3xl mx-auto">
          <h4 className="font-semibold text-yellow-800 mb-2">Note on Pricing</h4>
          <p className="text-yellow-700 text-sm">
            Prices may vary based on plot size, complexity of design, and specific requirements. 
            Contact us for an exact quote tailored to your project.
          </p>
        </div>
      </div>
    </section>
  );
}
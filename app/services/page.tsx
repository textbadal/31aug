"use client";

import { useState } from "react";
import {
  Home,
  PenTool,
  Building,
  Compass,
  FileText,
  Map,
  Users,
  Ruler,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const services = [
  {
    id: 1,
    name: "House Planning",
    description: "Custom house plans designed as per your requirements and vastu compliance.",
    icon: Home,
    details: [
      { label: "Starting Price", value: "₹999", icon: Ruler },
      { label: "Delivery", value: "2-3 Days", icon: FileText },
      { label: "Revisions", value: "2 Free", icon: PenTool },
    ],
  },
  {
    id: 2,
    name: "Interior Design",
    description: "Beautiful and functional interiors tailored to your lifestyle.",
    icon: PenTool,
    details: [
      { label: "Starting Price", value: "₹2,499", icon: Ruler },
      { label: "Delivery", value: "5-7 Days", icon: FileText },
      { label: "Consultation", value: "Free", icon: Users },
    ],
  },
  {
    id: 3,
    name: "3D Elevation",
    description: "Realistic 3D front elevation designs for your dream home.",
    icon: Building,
    details: [
      { label: "Starting Price", value: "₹1,499", icon: Ruler },
      { label: "Delivery", value: "3-4 Days", icon: FileText },
      { label: "Views", value: "3 Angles", icon: Compass },
    ],
  },
  {
    id: 4,
    name: "Vastu Consultation",
    description: "Expert vastu guidance for your home and office spaces.",
    icon: Compass,
    details: [
      { label: "Starting Price", value: "₹599", icon: Ruler },
      { label: "Delivery", value: "1-2 Days", icon: FileText },
      { label: "Mode", value: "Online/Offline", icon: Map },
    ],
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Tap to view details of each service
        </p>

        <div className="space-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isOpen = openService === service.id;

            return (
              <div
                key={service.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden"
              >
                {/* Header Row */}
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() =>
                    setOpenService(isOpen ? null : service.id)
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-xs text-gray-500">{service.description}</p>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {/* Expandable Section */}
                {isOpen && (
                  <div className="px-4 pb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                      {service.details.map((detail, i) => {
                        const DetailIcon = detail.icon;
                        return (
                          <div
                            key={i}
                            className="bg-gray-50 p-3 rounded-xl text-center"
                          >
                            <DetailIcon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs text-gray-500">{detail.label}</div>
                            <div className="text-sm font-semibold text-gray-900">
                              {detail.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

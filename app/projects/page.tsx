"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2, Hammer, CheckCircle2, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Duplex House",
    description:
      "A luxurious duplex house designed with vastu compliance and modern architecture.",
    image: "/images/projects/project1.jpg",
    status: "Completed",
    width: 30,
    length: 40,
  },
  {
    id: 2,
    title: "Apartment Complex",
    description:
      "A multi-storey apartment project focusing on space optimization and natural lighting.",
    image: "/images/projects/project2.jpg",
    status: "Ongoing",
    width: 40,
    length: 60,
  },
  {
    id: 3,
    title: "Farmhouse Retreat",
    description:
      "A peaceful farmhouse retreat blending traditional aesthetics with modern design.",
    image: "/images/projects/project3.jpg",
    status: "Completed",
    width: 50,
    length: 70,
  },
];

export default function ProjectsPage() {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchWidth = width ? project.width === parseInt(width) : true;
    const matchLength = length ? project.length === parseInt(length) : true;
    return matchWidth && matchLength;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
          Search Floor Plans
        </h1>
        <p className="text-gray-600 mt-3">
          Enter your desired dimensions and explore matching projects.
        </p>
      </div>

      {/* Search Form */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <input
          type="number"
          placeholder="Width (ft)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full sm:w-40 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="number"
          placeholder="Length (ft)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full sm:w-40 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-amber-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition">
          <Search size={18} /> Search
        </button>
      </div>

      {/* Results */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Building2 size={18} className="text-blue-600" />
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  {project.status === "Completed" ? (
                    <CheckCircle2 className="text-green-600" size={18} />
                  ) : (
                    <Hammer className="text-amber-600" size={18} />
                  )}
                  <span
                    className={
                      project.status === "Completed"
                        ? "text-green-600"
                        : "text-amber-600"
                    }
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>
            No plans found for{" "}
            {width && length
              ? `${width}×${length} ft`
              : width
              ? `width ${width} ft`
              : length
              ? `length ${length} ft`
              : "your search"}
          </p>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              `${width || ""}x${length || ""} house floor plan`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            Search on Google →
          </a>
        </div>
      )}
    </section>
  );
}

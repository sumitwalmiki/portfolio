"use client";

import { useEffect, useState } from "react";
import {
  Quote,
  Star,
  Plus,
  Linkedin,
  Calendar,
  Building,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RecommendationModal from "./RecommendationModal";
import { formatDateString } from "@/lib/utils";

interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  date: string;
  linkedinUrl?: string;
  relationship: string;
}

export default function Recommendations() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "TechCorp",
      content:
        "Sumit is an exceptional full-stack developer who consistently delivers high-quality solutions. His ability to understand complex requirements and translate them into scalable applications is remarkable. He's not just a coder, but a true problem solver who thinks about the bigger picture.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2024-01-15",
      linkedinUrl: "https://linkedin.com/in/sarahjohnson",
      relationship: "Worked together at TechCorp",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Engineering Manager",
      company: "InnovateLabs",
      content:
        "I had the pleasure of working with Sumit on several critical projects. His technical expertise spans across multiple technologies, and he has a unique ability to adapt quickly to new frameworks. His code quality and attention to detail are outstanding.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2023-12-08",
      linkedinUrl: "https://linkedin.com/in/michaelchen",
      relationship: "Direct manager at InnovateLabs",
    },
    {
      id: "3",
      name: "Alex Rodriguez",
      role: "Lead Frontend Developer",
      company: "StartupXYZ",
      content:
        "Sumit's passion for learning and staying updated with the latest technologies is inspiring. He brought fresh ideas to our team and helped us implement modern development practices. His collaborative approach makes him a valuable team member.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2023-11-22",
      linkedinUrl: "https://linkedin.com/in/alexrodriguez",
      relationship: "Colleague at StartupXYZ",
    },
    {
      id: "4",
      name: "Dr. Emily Watson",
      role: "CTO",
      company: "HealthTech Solutions",
      content:
        "Sumit delivered our healthcare analytics platform ahead of schedule with exceptional quality. His understanding of both technical and business requirements helped us create a solution that truly serves our users. Highly recommended for any complex project.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2023-10-10",
      linkedinUrl: "https://linkedin.com/in/emilywatson",
      relationship: "Client at HealthTech Solutions",
    },
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("recommendations");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleAddRecommendation = (newRec: any) => {
    const recommendation: Recommendation = {
      id: Date.now().toString(),
      ...newRec,
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: new Date().toISOString().split("T")[0],
    };

    setRecommendations((prev) => [recommendation, ...prev]);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  return (
    <section
      id="recommendations"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                Professional Recommendations
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              What People{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Testimonials from colleagues, managers, and clients who have
              worked with me on various projects.
            </p>
          </div>

          {/* Success Message */}
          {showSuccessMessage && (
            <div className="max-w-md mx-auto mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-green-800 font-medium">
                Thank you! Your recommendation has been added.
              </p>
            </div>
          )}

          {/* Add Recommendation CTA */}
          <div className="text-center mb-12">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Your Recommendation
            </Button>
          </div>

          {/* Recommendations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation.id}
                className={`bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon and Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-2xl border border-blue-200">
                    <Quote className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(recommendation.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{recommendation.content}"
                </p>

                {/* Relationship */}
                <div className="mb-6">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                    {recommendation.relationship}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={recommendation.avatar || "/placeholder.svg"}
                        alt={recommendation.name}
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-white shadow-lg"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {recommendation.name}
                      </h4>
                      <p className="text-slate-600 text-sm flex items-center">
                        <Building className="w-3 h-3 mr-1" />
                        {recommendation.role} at {recommendation.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-slate-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDateString(recommendation.date)}
                    </div>
                    {recommendation.linkedinUrl && (
                      <a
                        href={recommendation.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 border-2 border-blue-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                More Recommendations on LinkedIn
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect with me on LinkedIn to see additional recommendations
                and endorsements from my professional network.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a
                  href="https://linkedin.com/in/sumitwalmiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <RecommendationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddRecommendation}
      />
    </section>
  );
}

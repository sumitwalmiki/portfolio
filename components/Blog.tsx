"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ExternalLink,
  Clock,
  Tag,
  ArrowRight,
  BookOpen,
  Linkedin,
  TrendingUp,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatDateString } from "@/lib/utils";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("blog");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title:
        "Creating a Custom useForm Hook in React for Dynamic Form Validation",
      excerpt:
        "Learn how to build a reusable custom hook for handling form state and validation in React applications with TypeScript support.",
      date: "2024-01-15",
      readTime: "8 min read",
      link: "https://dev.to/sumitwalmiki/creating-a-custom-useform-hook-in-react-for-dynamic-form-validation-595f",
      tags: ["React", "TypeScript", "Hooks", "Form Validation"],
      category: "React",
      platform: "Dev.to",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      views: "2.5k",
      likes: "156",
    },
    {
      id: 2,
      title: "Building Scalable Node.js APIs with Express and MongoDB",
      excerpt:
        "A comprehensive guide to creating robust backend APIs using Node.js, Express.js, and MongoDB with best practices for production.",
      date: "2024-01-08",
      readTime: "12 min read",
      link: "https://dev.to/sumitwalmiki/building-scalable-nodejs-apis-with-express-and-mongodb",
      tags: ["Node.js", "Express", "MongoDB", "API"],
      category: "Backend",
      platform: "Dev.to",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "1.8k",
      likes: "89",
    },
    {
      id: 3,
      title: "Next.js 14 App Router: Complete Guide to Server Components",
      excerpt:
        "Explore the power of Next.js 14 App Router and Server Components for building high-performance React applications.",
      date: "2023-12-22",
      readTime: "10 min read",
      link: "https://dev.to/sumitwalmiki/nextjs-14-app-router-complete-guide-to-server-components",
      tags: ["Next.js", "React", "Server Components", "Performance"],
      category: "Next.js",
      platform: "Dev.to",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "3.2k",
      likes: "201",
    },
    {
      id: 4,
      title: "The Future of Full-Stack Development: Trends and Technologies",
      excerpt:
        "Exploring emerging trends in full-stack development and how they're shaping the future of web applications.",
      date: "2023-12-15",
      readTime: "6 min read",
      link: "https://linkedin.com/pulse/future-full-stack-development-trends-technologies-sumit-walmiki",
      tags: ["Full-Stack", "Trends", "Technology", "Future"],
      category: "Industry",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "1.5k",
      likes: "78",
    },
    {
      id: 5,
      title: "Optimizing React Performance: Memoization and Virtual DOM",
      excerpt:
        "Deep dive into React performance optimization techniques including useMemo, useCallback, and understanding the Virtual DOM.",
      date: "2023-11-28",
      readTime: "15 min read",
      link: "https://dev.to/sumitwalmiki/optimizing-react-performance-memoization-and-virtual-dom",
      tags: ["React", "Performance", "Optimization", "Virtual DOM"],
      category: "React",
      platform: "Dev.to",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "4.1k",
      likes: "267",
    },
    {
      id: 6,
      title: "Building Microservices with Node.js and Docker",
      excerpt:
        "Learn how to architect and deploy microservices using Node.js, Docker, and modern DevOps practices.",
      date: "2023-11-10",
      readTime: "18 min read",
      link: "https://linkedin.com/pulse/building-microservices-nodejs-docker-sumit-walmiki",
      tags: ["Microservices", "Node.js", "Docker", "DevOps"],
      category: "Backend",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "2.7k",
      likes: "134",
    },
  ];

  const categories = ["All", "React", "Next.js", "Backend", "Industry"];
  const platforms = ["All", "Dev.to", "LinkedIn"];

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.category === selectedCategory;
    const platformMatch =
      selectedPlatform === "All" || post.platform === selectedPlatform;
    return categoryMatch && platformMatch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter(
    (post) =>
      !post.featured || selectedCategory !== "All" || selectedPlatform !== "All"
  );

  const totalViews = blogPosts.reduce(
    (sum, post) => sum + Number.parseFloat(post.views.replace("k", "")) * 1000,
    0
  );
  const totalLikes = blogPosts.reduce(
    (sum, post) => sum + Number.parseInt(post.likes),
    0
  );

  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-sm">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">
                Technical Writing & Insights
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Blog & <span className="text-blue-600">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and thoughts about modern web
              development, best practices, and emerging technologies.
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {Math.round(totalViews / 1000)}k+
                </div>
                <div className="text-sm text-slate-600 flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  Total Views
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {totalLikes}+
                </div>
                <div className="text-sm text-slate-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Total Likes
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {blogPosts.length}
                </div>
                <div className="text-sm text-slate-600">Articles</div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            {/* Category Filter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700">
                Filter by Category:
              </p>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Filter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-700">
                Filter by Platform:
              </p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedPlatform === platform
                        ? "bg-green-600 text-white shadow-lg"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-green-300 hover:bg-green-50"
                    }`}
                  >
                    {platform === "Dev.to" ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 bg-black rounded mr-2"></span>
                        Dev.to
                      </span>
                    ) : platform === "LinkedIn" ? (
                      <span className="flex items-center">
                        <Linkedin className="w-4 h-4 mr-2 text-blue-600" />
                        LinkedIn
                      </span>
                    ) : (
                      platform
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost &&
            selectedCategory === "All" &&
            selectedPlatform === "All" && (
              <div className="mb-16">
                <div className="bg-white rounded-3xl overflow-hidden border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl group">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={featuredPost.thumbnail || "/placeholder.svg"}
                        alt={featuredPost.title}
                        width={400}
                        height={250}
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                          {featuredPost.platform}
                        </span>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDateString(featuredPost.date)}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                        <Link
                          href={featuredPost.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {featuredPost.title}
                        </Link>
                      </h3>

                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{featuredPost.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{featuredPost.likes} likes</span>
                          </div>
                        </div>

                        <Button
                          asChild
                          className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                          <Link
                            href={featuredPost.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Article
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:scale-105 group ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-2 py-1 bg-white/90 text-slate-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.platform === "Dev.to"
                          ? "bg-black/90 text-white"
                          : "bg-blue-600/90 text-white"
                      }`}
                    >
                      {post.platform}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDateString(post.date)}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                    </div>

                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-3xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Want to read more?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Follow me on my writing platforms for more articles about web
              development, React, Node.js, and modern JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link
                  href="https://dev.to/sumitwalmiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Dev.to
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link
                  href="https://linkedin.com/in/sumitwalmiki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Follow on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

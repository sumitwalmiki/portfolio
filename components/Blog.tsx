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
      date: "2024-06-22",
      readTime: "10 min read",
      link: "https://dev.to/sumitwalmiki/creating-a-custom-useform-hook-in-react-for-dynamic-form-validation-595f",
      tags: ["React", "Hooks", "Form Validation"],
      category: "React",
      platform: "Dev.to",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      views: "539",
      likes: "42",
		},
    {
      id: 2,
      title: "Exploring AI Integrations to create images",
      excerpt:
        "Explore the power of AI to create visually appealing cover images for linkedin.",
      date: "2025-08-16",
      readTime: "1 min read",
      link: "https://www.linkedin.com/posts/sumitwalmiki_exploring-ai-integrations-in-design-while-activity-7362396699685797888-lqXj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8EPyoBVIuO_HU80T9o3XVyGUGAEtSBM_0",
      tags: ["AI", "Design", "LinkedIn"],
      category: "AI",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "75",
      likes: "40",
		},
    {
      id: 3,
      title: "LeetCode Learning #1: Maximum Average Subarray I – Sliding Window Approach",
      excerpt:
        "Been working on sliding window problems, and today I solved LeetCode 643: Maximum Average Subarray I.",
      date: "2025-04-14",
      readTime: "1 min read",
      link: "https://www.linkedin.com/posts/sumitwalmiki_leetcode-coding-slidingwindow-activity-7309232640165908481-C9eZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8EPyoBVIuO_HU80T9o3XVyGUGAEtSBM_0",
      tags: ["LeetCode", "Coding", "Sliding Window"],
      category: "LeetCode",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: true,
      views: "368",
      likes: "181",
		},		
		{
      id: 4,
      title: "Performance Optimization – Preventing Unnecessary Re-Renders",
      excerpt:
        "Optimizing React applications is crucial for performance and scalability.",
      date: "2025-03-28",
      readTime: "1 min read",
      link: "https://www.linkedin.com/posts/sumitwalmiki_react-performanceoptimization-reactjs-activity-7309967274013040640-IHJD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8EPyoBVIuO_HU80T9o3XVyGUGAEtSBM_0",
      tags: ["React", "Performance", "Optimization"],
      category: "React",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "205",
      likes: "74",
		},
    {
      id: 5,
      title: "The Power of Throttle and Debounce for Better Event Handling",
      excerpt:
        "Mastering javaScript efficiency with Throttle and Debounce for Better Event Handling",
      date: "2025-08-16",
      readTime: "1 min read",
      link: "https://www.linkedin.com/posts/sumitwalmiki_webdev-javascript-programming-activity-7201599058048663553-2yab?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB8EPyoBVIuO_HU80T9o3XVyGUGAEtSBM_0",
      tags: ["JavaScript", "Performance"],
      category: "JavaScript",
      platform: "LinkedIn",
      thumbnail: "/placeholder.svg?height=200&width=300",
      featured: false,
      views: "368",
      likes: "9",
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
								<div className="md:block">
                    <div className="p-8">
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
											
										<div className="flex items-center space-x-1">
											<span className="px-2 py-1 bg-white/90 text-slate-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
										</div>
										<div className="flex items-center space-x-1">											
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

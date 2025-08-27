"use client"

import { useState, useEffect } from "react"
import { Terminal, Code2, Database, Wrench, Globe, ChevronRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Skills() {
  	const [activeTab, setActiveTab] = useState("frontend")
		const [isVisible, setIsVisible] = useState(false)
		const [copiedCommand, setCopiedCommand] = useState("")
	
		const skillCategories = {
			frontend: {
				title: "Frontend Development",
				icon: Code2,
				color: "text-blue-600",
				bgColor: "bg-blue-50",
				borderColor: "border-blue-200",
				description: "Building modern, responsive user interfaces",
				skills: [
					{ name: "ReactJS", version: "18.x", description: "Component-based UI library", experience: "5+ years" },
					{ name: "Next.js", version: "14.x", description: "Full-stack React framework", experience: "3+ years" },
					{ name: "Redux", version: "4.x", description: "State management library", experience: "3+ years" },
					{ name: "JavaScript", version: "ES6+", description: "Modern JavaScript features", experience: "5+ years" },
					{ name: "HTML5", version: "5.0", description: "Semantic markup language", experience: "5+ years" },
					{ name: "CSS3", version: "3.0", description: "Modern styling capabilities", experience: "5+ years" },
					{ name: "SCSS", version: "1.x", description: "CSS preprocessor", experience: "3+ years" },
					{ name: "Tailwind", version: "3.x", description: "Utility-first CSS framework", experience: "2+ years" },
					{ name: "Bootstrap", version: "5.x", description: "CSS component framework", experience: "5+ years" },
				],
				command: "npm install react next redux tailwindcss",
			},
			backend: {
				title: "Backend Development",
				icon: Database,
				color: "text-green-600",
				bgColor: "bg-green-50",
				borderColor: "border-green-200",
				description: "Server-side development and database management",
				skills: [
					{ name: "NodeJS", version: "18.x", description: "JavaScript runtime environment", experience: "2+ years" },
					{ name: "ExpressJS", version: "4.x", description: "Web application framework", experience: "1+ years" },
					{ name: "MongoDB", version: "6.x", description: "NoSQL document database", experience: "1+ years" },
					{ name: "NoSQL", version: "—", description: "Non-relational databases", experience: "1+ years" },
					{ name: "MySQL", version: "8.x", description: "Relational database system", experience: "3+ years" },
					{ name: "Firebase", version: "9.x", description: "Backend-as-a-Service platform", experience: "3+ years" },
				],
				command: "npm install express mongoose mysql2 firebase-admin",
			},
			tools: {
				title: "Tools & Frameworks",
				icon: Wrench,
				color: "text-purple-600",
				bgColor: "bg-purple-50",
				borderColor: "border-purple-200",
				description: "Development tools and productivity frameworks",
				skills: [
					{ name: "Webpack", version: "5.x", description: "Module bundler", experience: "3+ years" },
					{ name: "GitHub", version: "—", description: "Version control platform", experience: "5+ years" },
					{ name: "Git", version: "2.x", description: "Distributed version control", experience: "5+ years" },
					{ name: "Amazon QuickSight", version: "—", description: "Business analytics service", experience: "2+ years" },
					{ name: "Highcharts", version: "10.x", description: "Interactive charting library", experience: "2+ years" },
					{ name: "Google Analytics", version: "GA4", description: "Web analytics service", experience: "3+ years" },
					{ name: "Google Tag Manager", version: "—", description: "Tag management system", experience: "2+ years" },
					{ name: "Socket.io", version: "4.x", description: "Real-time communication", experience: "2+ years" },
				],
				command: "npm install webpack socket.io highcharts",
			},
			apis: {
				title: "APIs & Integration",
				icon: Globe,
				color: "text-orange-600",
				bgColor: "bg-orange-50",
				borderColor: "border-orange-200",
				description: "API development and third-party integrations",
				skills: [
					{ name: "REST APIs", version: "—", description: "RESTful web services", experience: "2+ years" },
					{ name: "Firebase APIs", version: "9.x", description: "Firebase service APIs", experience: "3+ years" },
				],
				command: "# RESTful API development with Express and Firebase",
			},
		}
		
		
		const currentlyExploring = [
			{ name: "AI Integration", icon: "🤖", color: "bg-purple-50 border-purple-200 text-purple-700" },
			{ name: "Advanced Frontend Architecture", icon: "☸️", color: "bg-blue-50 border-blue-200 text-blue-700" },
		]
	
		useEffect(() => {
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					}
				},
				{ threshold: 0.1 },
			)
	
			const element = document.getElementById("skills")
			if (element) observer.observe(element)
	
			return () => observer.disconnect()
		}, [])
	
		const copyCommand = (command: string, category: string) => {
			navigator.clipboard.writeText(command)
			setCopiedCommand(category)
			setTimeout(() => setCopiedCommand(""), 2000)
		}
	
		const currentCategory = skillCategories[activeTab as keyof typeof skillCategories]
	
		return (
			<section id="skills" className="py-20 bg-slate-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					>
						{/* Header */}
						<div className="text-center mb-16">
							<div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-2 rounded-full mb-6 shadow-professional">
								<Terminal className="w-5 h-5 text-slate-600" />
								<span className="text-sm font-medium text-slate-700">Developer Workspace</span>
							</div>
							<h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
								Technical Skills
							</h2>
							<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
								My development environment and the technologies I work with daily.
							</p>
						</div>
	
						{/* VS Code Style Interface */}
						<div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
							{/* Title Bar */}
							<div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
								<div className="flex items-center space-x-2">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
								<div className="text-slate-400 text-sm font-mono">sumit-walmiki-skills.json</div>
								<div className="w-16"></div>
							</div>
	
							{/* Tab Bar */}
							<div className="flex bg-slate-800 border-b border-slate-700 overflow-x-auto">
								{Object.entries(skillCategories).map(([key, category]) => (
									<button
										key={key}
										onClick={() => setActiveTab(key)}
										className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-r border-slate-700 whitespace-nowrap transition-colors ${
											activeTab === key
												? "bg-slate-900 text-white border-b-2 border-blue-500"
												: "text-slate-400 hover:text-slate-300 hover:bg-slate-750"
										}`}
									>
										<category.icon className="w-4 h-4" />
										<span>{category.title}</span>
									</button>
								))}
							</div>
	
							{/* Content Area */}
							<div className="grid lg:grid-cols-3 gap-0">
								{/* File Explorer */}
								<div className="bg-slate-800 border-r border-slate-700 p-4">
									<div className="text-slate-300 text-sm font-semibold mb-4 flex items-center">
										<ChevronRight className="w-4 h-4 mr-1" />
										EXPLORER
									</div>
									<div className="space-y-2">
										{Object.entries(skillCategories).map(([key, category]) => (
											<div
												key={key}
												onClick={() => setActiveTab(key)}
												className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer text-sm transition-colors ${
													activeTab === key
														? "bg-slate-700 text-white"
														: "text-slate-400 hover:text-slate-300 hover:bg-slate-750"
												}`}
											>
												<category.icon className="w-4 h-4" />
												<span>{category.title.toLowerCase().replace(/\s+/g, "-")}.js</span>
											</div>
										))}
									</div>
	
									{/* Package.json Preview */}
									<div className="mt-8 p-3 bg-slate-900 rounded border border-slate-600">
										<div className="text-slate-300 text-xs font-mono mb-2">package.json</div>
										<div className="text-slate-400 text-xs font-mono space-y-1">
											<div>{"{"}</div>
											<div className="ml-2">"name": "sumit-skills",</div>
											<div className="ml-2">"version": "5.0.0",</div>
											<div className="ml-2">"experience": "5+ years"</div>
											<div>{"}"}</div>
										</div>
									</div>
								</div>
	
								{/* Main Content */}
								<div className="lg:col-span-2 bg-slate-900 p-6 h-[385px] overflow-y-auto">
									{/* Terminal Header */}
									<div className="flex items-center justify-between mb-6">
										<div className="flex items-center space-x-3">
											<div className={`p-2 rounded-lg ${currentCategory.bgColor}`}>
												<currentCategory.icon className={`w-6 h-6 ${currentCategory.color}`} />
											</div>
											<div>
												<h3 className="text-xl font-bold text-white">{currentCategory.title}</h3>
												<p className="text-slate-400 text-sm">{currentCategory.description}</p>
											</div>
										</div>
									</div>
	
									{/* Command Line */}
									<div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
										<div className="flex items-center space-x-2 mb-2">
											<span className="text-green-400 font-mono text-sm">$</span>
											<span className="text-slate-300 font-mono text-sm">{currentCategory.command}</span>
											<Button
												size="sm"
												variant="ghost"
												onClick={() => copyCommand(currentCategory.command, activeTab)}
												className="ml-auto text-slate-400 hover:text-white p-1 h-auto"
											>
												{copiedCommand === activeTab ? (
													<Check className="w-4 h-4 text-green-400" />
												) : (
													<Copy className="w-4 h-4" />
												)}
											</Button>
										</div>
										<div className="text-slate-500 font-mono text-xs">
											Installing {currentCategory.skills.length} packages...
										</div>
									</div>
	
									{/* Skills List */}
									<div className="space-y-3">
										{currentCategory.skills.map((skill, index) => (
											<div
												key={skill.name}
												className={`bg-slate-800 rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300 ${
													isVisible ? "animate-slide-in-right" : "opacity-0"
												}`}
												style={{ animationDelay: `${index * 100}ms` }}
											>
												<div className="flex items-center justify-between">
													<div className="flex items-center space-x-3">
														<div className="w-2 h-2 bg-green-400 rounded-full"></div>
														<div>
															<div className="flex items-center space-x-2">
																<span className="text-white font-semibold">{skill.name}</span>
																<span className="text-blue-400 text-sm font-mono">{skill.version}</span>
															</div>
															<p className="text-slate-400 text-sm">{skill.description}</p>
														</div>
													</div>
													<div className="text-right">
														<div className="text-slate-300 text-sm font-medium">{skill.experience}</div>
													</div>
												</div>
											</div>
										))}
									</div>
	
									{/* Terminal Output */}
									<div className="mt-6 bg-slate-800 rounded-lg p-4 border border-slate-600">
										<div className="text-green-400 font-mono text-sm">
											✓ Successfully installed {currentCategory.skills.length} packages
										</div>
										<div className="text-slate-400 font-mono text-xs mt-1">Ready for production deployment 🚀</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* Currently Exploring */}
						<div className="mt-8 text-center">
							<div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 xxs:px-4 py-2 rounded-full mb-8 shadow-professional">
								<Globe className="w-4 xxs:w-5 h-4 xxs:h-5 text-green-600" />
								<span className="text-xs xxs:text-sm font-medium text-slate-700">Currently Exploring</span>
							</div>
	
							<div className="flex flex-wrap justify-center gap-3 xxs:gap-6">
								{currentlyExploring.map((tech, index) => (
									<div
										key={tech.name}
										className={`${tech.color} border-2 rounded-xl px-4 xxs:px-6 py-3 xxs:py-4 card-hover ${isVisible ? "animate-scale-in" : "opacity-0"}`}
										style={{ animationDelay: `${800 + index * 100}ms` }}
									>
										<div className="flex items-center space-x-2 xxs:space-x-3">
											<span className="text-xl xxs:text-2xl">{tech.icon}</span>
											<span className="font-semibold text-xs xxs:text-base">{tech.name}</span>
											<div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

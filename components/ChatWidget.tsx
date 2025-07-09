"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "Looking for your portfolio",
    "Just saying hello!",
    "Interested in mentorship",
    "We'd like to hire you",
    "Tell me about your projects",
    "What's your experience?",
  ];

  const botResponses = {
    "Looking for your portfolio":
      "Great! You can explore my projects in the Projects section above. I've worked on healthcare analytics, e-commerce platforms, and educational websites. Which type of project interests you most?",
    "Just saying hello!":
      "Hello there! 👋 Thanks for stopping by my portfolio. I'm Sumit, a MERN stack developer with 4+ years of experience. How can I help you today?",
    "Interested in mentorship":
      "That's wonderful! I'd love to help fellow developers grow. I can share insights about React, Next.js, Node.js, and career development. What specific area would you like guidance on?",
    "We'd like to hire you":
      "Excellent! I'm always open to exciting opportunities. I specialize in MERN stack development. Feel free to reach out via email at walmiki240@gmail.com or LinkedIn to discuss your project requirements.",
    "Tell me about your projects":
      "I've built various applications including healthcare analytics dashboards, e-commerce platforms like Amazon clone, streaming apps like Netflix clone, and educational websites. Each project showcases different aspects of modern web development. Which one would you like to know more about?",
    "What's your experience?":
      "I have 4+ years of experience in MERN stack development. I specialize in React, Next.js, Node.js, and MongoDB. I've worked on healthcare analytics, e-commerce platforms, and educational websites. I'm passionate about creating scalable, high-performance applications.",
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "1",
        text: "Hi! I'm Sumit Bot. I'm here to help you with any questions about Sumit's work and experience.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([initialMessage]);

      setTimeout(() => {
        const followUpMessage: Message = {
          id: "2",
          text: "How can I help you today?",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, followUpMessage]);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse =
        botResponses[text as keyof typeof botResponses] ||
        "Thanks for your message! For specific inquiries, please feel free to reach out via email at walmiki240@gmail.com or connect with me on LinkedIn. I'll get back to you within 24 hours!";

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <>
      {/* Chat Button (always visible, toggles chat) */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full gradient-primary text-white shadow-professional-xl card-hover"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-24 sm:bottom-22 right-4 sm:right-6 w-[95vw] max-w-xs h-[50vh] sm:w-96 sm:h-[500px] z-40 animate-scale-in">
          <div className="h-full bg-white rounded-t-2xl sm:rounded-2xl shadow-professional-xl border border-slate-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="gradient-primary text-white p-4 sm:p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sumit Bot"
                    width={40}
                    height={40}
                    className="rounded-full ring-2 ring-white/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Sumit Bot</h3>
                  <p className="text-xs sm:text-sm text-white/80 flex items-center">
                    <Code2 className="w-3 h-3 mr-1" />
                    AI Assistant
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 bg-slate-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] p-3 sm:p-4 rounded-2xl shadow-professional ${
                      message.sender === "user"
                        ? "gradient-primary text-white rounded-br-md"
                        : "bg-white text-slate-900 rounded-bl-md border border-slate-200"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-900 p-3 sm:p-4 rounded-2xl rounded-bl-md shadow-professional border border-slate-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Replies */}
              {messages.length <= 2 && !isTyping && (
                <div className="space-y-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="block w-full text-left p-2 sm:p-3 bg-white hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl text-xs sm:text-sm text-slate-700 font-medium transition-all duration-200 shadow-professional"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-6 bg-white border-t border-slate-200">
              <form
                onSubmit={handleSubmit}
                className="flex space-x-2 sm:space-x-3"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-xs sm:text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="gradient-primary text-white rounded-lg shadow-professional"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

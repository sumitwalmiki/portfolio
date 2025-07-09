import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const RESUME_URL = "/assets/resume.pdf";

const DownloadResumeButton: React.FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    // Open in new tab
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
    // Download
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ textDecoration: "none" }}
      aria-label="Download and view resume"
    >
      <Button
        variant="outline"
        size="lg"
        className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-lg shadow-lg transition-all duration-300 bg-white"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </Button>
    </a>
  );
};

export default DownloadResumeButton;

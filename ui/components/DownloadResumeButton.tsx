import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadResumeButton: React.FC = () => {
  const handleDownloadAndOpen = () => {
    const url = "SumitWalmikiResume.pdf";
    window.open(url, "_blank", "noopener,noreferrer");
    const link = document.createElement("a");
    link.href = url;
    link.download = "SumitWalmikiResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="border-2 border-slate-300 rounded-lg shadow-lg hover:shadow-xl  hover:border-slate-400 hover:bg-slate-50 px-8 py-4 transition-all duration-300 bg-white"
      onClick={handleDownloadAndOpen}
      aria-label="Download and view resume"
    >
      <Download className="w-5 h-5 mr-2" />
      Download Resume
    </Button>
  );
};

export default DownloadResumeButton;

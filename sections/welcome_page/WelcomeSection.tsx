"use client"
import React, { useState, useEffect } from "react";
import SexSelectionModal from "@/components/welcome_page/SelectionComponent";

type Sex = "man" | "woman";

interface WelcomeSectionProps {
  sex?: Sex;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ sex }) => {
  const [selectedSex, setSelectedSex] = useState<Sex | null>(sex || null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    // Check if 'sex' is already in local storage
    const storedSex = localStorage.getItem("sex");
    if (storedSex) {
      setSelectedSex(storedSex as Sex);
      setScrollEnabled(false);
    }
  }, []);

  const handleSexSelected = (selectedSex: Sex) => {
    localStorage.setItem("sex", selectedSex);
    setSelectedSex(selectedSex);
    setScrollEnabled(true);
  };

  useEffect(() => {
    // Toggle scroll behavior based on state
    const handleScroll = () => {
      if (!scrollEnabled) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollEnabled]);

  // If 'sex' is already selected, do not show the selection section
  if (selectedSex) {
    return null;
  }

  // If 'sex' is not selected, show the selection section
  return <SexSelectionModal onSexSelected={handleSexSelected} />;
};

export default WelcomeSection;

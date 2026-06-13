import React, { useState, useEffect } from 'react';
import hmiLogo from "../assets/image/HMI_PWK.png";

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50" />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center animate-splash-logo">
        <img
          src={hmiLogo}
          alt="HMI Purwakarta"
          className="w-64 h-64 sm:w-100 sm:h-100 object-contain"
        />

      </div>

      {/* Loading bar */}
      <div className="absolute bottom-16 w-40 h-1 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-600 to-orange-500 rounded-full animate-splash-bar" />
      </div>

      <style>{`
        @keyframes splash-logo-in {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(10px);
          }
          60% {
            opacity: 1;
            transform: scale(1.03) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes splash-bar-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .animate-splash-logo {
          animation: splash-logo-in 0.7s ease-out forwards;
        }

        .animate-splash-bar {
          animation: splash-bar-fill 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
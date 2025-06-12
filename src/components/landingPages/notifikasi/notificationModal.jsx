// src/components/NotificationModal.jsx
import React from "react";
import {
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  AlertCircle,
} from "lucide-react"; // atau heroicons

const iconMap = {
  success: <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />,
  error: <XCircle className="w-6 h-6 text-red-500 mx-auto mb-2" />,
  warning: <AlertTriangle className="w-6 h-6 text-yellow-500 mx-auto mb-2" />,
  info: <Info className="w-6 h-6 text-blue-500 mx-auto mb-2" />,
};

const defaultColorMap = {
  success: {
    titleColor: "text-green-600",
    buttonColor: "bg-green-600",
  },
  error: {
    titleColor: "text-red-600",
    buttonColor: "bg-red-600",
  },
  warning: {
    titleColor: "text-yellow-600",
    buttonColor: "bg-yellow-600",
  },
  info: {
    titleColor: "text-blue-600",
    buttonColor: "bg-blue-600",
  },
};

const NotificationModal = ({
  isOpen,
  title,
  message,
  onClose,
  type = "info",
  icon,
  titleColor,
  backgroundColor = "bg-white",
  buttonText = "OK",
  buttonColor,
  children,
}) => {
  if (!isOpen) return null;

  const fallbackIcon = iconMap[type];
  const colors = defaultColorMap[type] || {};
  const appliedTitleColor = titleColor || colors.titleColor || "text-gray-800";
  const appliedButtonColor =
    buttonColor || colors.buttonColor || "bg-gray-800";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center z-50 animate-fadeIn">
      <div
        className={`${backgroundColor} p-8 rounded-2xl max-w-sm w-full text-center shadow-xl transform transition-all duration-300 ease-out animate-modalSlide`}
      >
        <div className="mb-2">
          {icon !== null && (icon || fallbackIcon)}
        </div>

        <h2 className={`text-xl font-bold ${appliedTitleColor} mb-3`}>
          {title}
        </h2>

        {children ? (
          <div className="text-base text-gray-600 mb-6">{children}</div>
        ) : (
          message && <p className="text-base text-gray-600 mb-6">{message}</p>
        )}

        <button
          className={`${appliedButtonColor} text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity duration-200`}
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
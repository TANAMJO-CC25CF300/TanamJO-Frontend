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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div
        className={`${backgroundColor} p-6 rounded-xl max-w-sm w-full text-center shadow-lg`}
      >
        {icon !== null && (icon || fallbackIcon)}

        <h2 className={`text-lg font-bold ${appliedTitleColor} mb-2`}>
          {title}
        </h2>

        {children ? (
          <div className="text-sm text-gray-700 mb-4">{children}</div>
        ) : (
          message && <p className="text-sm text-gray-700 mb-4">{message}</p>
        )}

        <button
          className={`${appliedButtonColor} text-white px-4 py-2 rounded-full`}
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;

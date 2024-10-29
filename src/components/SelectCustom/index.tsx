import React, { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

interface IconProps {
  className?: string;
}

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ChevronUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  options,
  value,
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`textfield__input ${error ? "textfield__input--error" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`mt-2 ${
            value ? "font-medium text-[#707070]" : "text-gray-400"
          }`}
        >
          {value && value}
        </div>

        {isOpen ? (
          <ChevronUpIcon className="textfield__icon" />
        ) : (
          <ChevronDownIcon className="textfield__icon" />
        )}
      </div>

      <label
        style={{
          color: "#707070",
        }}
        htmlFor={id}
        className={`textfield__label textfield__label--required ${
          !value && "mt-[8px]"
        }`}
      >
        {label}
      </label>

      {isOpen && (
        <ul className="absolute z-10 text-[14px] px-[8px] py-[8px] bg-white border border-gray-300 rounded-lg w-full mt-1 max-h-96 overflow-y-auto shadow-lg">
          <div className="flex px-1 gap-2 items-center pt-2 text-[#DADADA]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#DADADA]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <li className="relative">
              Please Select
              <span className="absolute ml-2 text-red-600">*</span>
            </li>
          </div>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`flex justify-between text-[#707070] items-center px-[16px] py-[8px] cursor-pointer 
                          hover:bg-gray-100 
                          ${
                            value === option
                              ? "font-semibold text-[#00366A]"
                              : ""
                          } 
                          }`}
            >
              <span>{option}</span>
              {value === option && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#00366A]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}

      {error && <small className="text-red-500 text-sm mt-1">{error}</small>}
    </div>
  );
};

export default CustomSelect;

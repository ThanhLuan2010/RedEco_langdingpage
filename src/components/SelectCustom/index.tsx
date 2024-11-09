import React, { useState, useRef, useEffect } from "react";

interface CustomSelectProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
  selectedOptionRef?: React.RefObject<HTMLLIElement>;
  selectedCountry?: string;
}

interface IconProps {
  className?: string;
}

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 7.99997L12.9428 15.0572C12.4221 15.5779 11.5779 15.5779 11.0572 15.0572L4 7.99997"
      stroke="#004890"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

const ChevronUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 16L11.0572 8.94281C11.5779 8.42211 12.4221 8.42211 12.9428 8.94281L20 16"
      stroke="#004890"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  label,
  options,
  value,
  error,
  onChange,
  selectedOptionRef,
  selectedCountry,
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
          <ChevronUpIcon className="textfield__icon w-[18px]" />
        ) : (
          <ChevronDownIcon className="textfield__icon w-[18px]" />
        )}
      </div>

      <label
        style={{
          color: "#707070",
        }}
        htmlFor={id}
        className={`textfield__label textfield__label--required font-Montserrat font-normal ${
          !value && "mt-[10px] opacity-[0.6]"
        }`}
      >
        {label}
      </label>

      {isOpen && (
        <ul className="absolute z-10 text-[14px] py-[8px] bg-white  rounded-b-lg w-full  max-h-96 overflow-y-auto shadow-lg">
          <div className="px-[8px] flex px-1 gap-2 items-center py-[10px] text-[#DADADA]">
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
          <div className="max-h-96 overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                ref={selectedCountry === option ? selectedOptionRef : null} // Gán ref cho mục đã chọn
                onClick={() => handleOptionClick(option)}
                className={`flex justify-between  items-center px-[16px] py-[4px] my-[4px] cursor-pointer 
                          hover:bg-[#00366A] hover:text-white 
                          ${
                            value === option
                              ? "font-semibold text-[#00366A]"
                              : "text-[#707070]"
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
          </div>
        </ul>
      )}

      {error && <small className="text-red-500 text-[8px] absolute mt-1">{error}</small>}
    </div>
  );
};

export default CustomSelect;

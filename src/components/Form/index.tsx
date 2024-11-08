"use client";

import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import Button from "../Button";
import CustomSelect from "../SelectCustom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  category: string;
  message: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip is required"),
});

const categories = [
  "Customer/Dealer",
  "Discount Policy",
  "Particular Issues",
  "Question/Answer",
  "Access & Logistics",
  "Operational/Service Training",
  "Network/Dealer",
  "Product/Service       ",
  "Other",
];

const FormCustom: any = ({ setIsStatusSubmit, setUserNameSubmit }: any) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    category: "",
    message: "",
  });

  const [countries, setCountries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const selectedOptionRef = useRef<any>(null); // Tạo ref để cuộn đến mục đã chọn

  useEffect(() => {
    // Lấy danh sách quốc gia và sắp xếp theo alphabet
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data;
        const sortedCountries = countryList
          .map((country: any) => country.name.common)
          .sort((a: any, b: any) => a.localeCompare(b));
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    // Lắng nghe sự kiện keydown để tích lũy chuỗi tìm kiếm
    const handleKeydown = (event: any) => {
      const char = event.key;
      // Chỉ xử lý nếu là ký tự chữ
      if (/^[a-zA-Z]$/.test(char)) {
        setSearchTerm((prevTerm) => prevTerm + char);

        // Reset chuỗi tìm kiếm sau 1 giây nếu không có phím mới
        setTimeout(() => setSearchTerm(""), 1000);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    // Tìm quốc gia phù hợp khi searchTerm thay đổi
    if (searchTerm) {
      const match = countries.find((country) =>
        country.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      console.log(searchTerm);
      console.log(match);
      if (match) {
        setSelectedCountry(match);
          // Đặt mục đã chọn vào ref để cuộn tới
          setTimeout(() => {
            if (selectedOptionRef.current) {
              selectedOptionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 0);
      }
    }
  }, [searchTerm, countries]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors({});
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors: Partial<FormData> = {};
      (validationErrors as yup.ValidationError).inner.forEach((err) => {
        if (err.path) newErrors[err.path as keyof FormData] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid) {
      try {
        setIsLoading(true);
        await fetch(
          "https://api.sheetbest.com/sheets/6e870419-6aca-4069-be29-f9268f8bb7fb",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        setIsLoading(false);
        setIsStatusSubmit(true);
        setUserNameSubmit(`${formData.firstName} ${formData.lastName}`);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          companyName: "",
          address: "",
          city: "",
          zip: "",
          country: "",
          category: "",
          message: "",
        });
      } catch (error) {
        alert("Failed to submit the form.");
      }
    }
  };

  const renderInput = (
    id: keyof FormData,
    placeholder: string,
    type: string = "text",
    hideRequiredMark?: boolean
  ) => (
    <div className="">
      <fieldset className="textfield">
        <input
          id={id}
          name={id}
          type={type}
          value={formData[id] || ""}
          onChange={handleChange}
          className={`textfield__input font-Montserrat font-normal ${
            errors[id] ? "textfield__input--error" : ""
          }`}
          placeholder=""
        />
        <label
          htmlFor={id}
          className={`textfield__label ${
            hideRequiredMark ? "no-required" : "textfield__label--required"
          }`}
        >
          {placeholder}
        </label>
      </fieldset>
      {errors[id] && (
        <small className="text-red-500 text-sm mt-1 font-Montserrat font-normal">{errors[id]}</small>
      )}
    </div>
  );

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  const renderSelect = (
    id: keyof FormData,
    options: string[],
    label: string
  ) => (
    <CustomSelect
      id={id}
      label={label}
      selectedOptionRef={selectedOptionRef}
      options={options}
      selectedCountry={selectedCountry}
      value={formData[id]}
      error={errors[id]}
      onChange={(value) => handleSelectChange(id, value)}
    />
  );

  return (
    <div
      className="w-full xl:px-0 lg:px-0 md:px-0 sm:px-8 px-8 flex flex-col
    xl:pt-[54px] md:pt-[40px] lg:pt-[50px] pt-[20px]
    "
    >
      <form onSubmit={handleSubmit}>
        <div className="w-[100%] pl-[20px] md:pl-[5%] xl:pl-[10%]">
          <div className="flex xl:flex-row md:flex-row lg:flex-row sm:flex-col flex-col items-center gap-[25px] 2x:gap-[35px] mb-[25px] 2xl:mb-[35px]">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] w-[100%]">
              {renderInput("firstName", "First Name")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("lastName", "Last Name")}
            </div>
          </div>

          <div className="flex xl:flex-row md:flex-row lg:flex-row flex-col sm:flex-col items-center  gap-[25px] 2x:gap-[35px] mb-[25px] 2xl:mb-[35px] ">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("email", "Email Address", "email")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("phone", "Phone", "tel")}
            </div>
          </div>

          <div className="mb-[25px] 2xl:mb-[35px] ">
            {renderInput("companyName", "Company Name", undefined, true)}
          </div>
          <div className="mb-[25px] 2xl:mb-[35px] ">
            {renderInput("address", "Address Line")}
          </div>

          <div className="flex xl:flex-row md:flex-row lg:flex-row flex-col sm:flex-col items-center  gap-[25px] 2x:gap-[35px] mb-[25px] 2xl:mb-[35px]">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("city", "City")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("zip", "ZIP/Postal Code")}
            </div>
          </div>

          <div className="mb-[25px] 2xl:mb-[35px]">
            {renderSelect("country", countries, "Country or Region")}
          </div>
          <div className="mb-[25px] 2xl:mb-[35px] ">
            {renderSelect("category", categories, "Select Category")}
          </div>

          <div className="textfield mb-[25px] 2xl:mb-[35px] ">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                height: 150,
              }}
              className={`textfield__input ${
                errors.message ? "textfield__input--error" : ""
              }`}
              placeholder="Your message"
            />
            {errors.message && (
              <small className="text-red-500">{errors.message}</small>
            )}
          </div>

          <div className="w-full flex justify-center">
            <Button isLoading={isLoading} text="SEND" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCustom;

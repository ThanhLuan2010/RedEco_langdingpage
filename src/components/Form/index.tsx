"use client";

import React, { useEffect, useState } from "react";
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
  "Product/Service Information",
  "Other",
];

const FormCustom: React.FC = () => {
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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryList = data.map((country: any) => country.name.common);
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

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
        alert("Submitted google sheet successfully!");

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
    <div className="mb-4">
      <fieldset className="textfield">
        <input
          id={id}
          name={id}
          type={type}
          value={formData[id] || ""}
          onChange={handleChange}
          className={`textfield__input ${
            errors[id] ? "textfield__input--error" : ""
          }`}
          placeholder=" "
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
        <small className="text-red-500 text-sm mt-1">{errors[id]}</small>
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
      options={options}
      value={formData[id]}
      error={errors[id]}
      onChange={(value) => handleSelectChange(id, value)}
    />
  );

  return (
    <div className="w-full xl:px-0 lg:px-0 md:px-0 sm:px-8 px-8 xl:pt-[98px] md:pt-[80px] lg:pt-[98px] sm:pt-[20px] pt-[20px] flex flex-col">
      <form onSubmit={handleSubmit}>
        <div
          className="xl:w-[74%] md:w-[74%] lg:w-[74%] sm:w-[100%] w-[100%] xl:ml-20 sm:ml-0 ml-0 md:ml-20 lg:ml-20  
        xl:px-[0px] lg:px-[0px] md:px-[0px] sm:px-[20px] px-[20px] mx-auto"
        >
          <div className="flex xl:flex-row md:flex-row lg:flex-row sm:flex-col flex-col items-center gap-4 mb-4">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("firstName", "First Name")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("lastName", "Last Name")}
            </div>
          </div>

          <div className="flex xl:flex-row md:flex-row lg:flex-row flex-col sm:flex-col items-center gap-4 mb-4">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("email", "Email Address", "email")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("phone", "Phone", "tel")}
            </div>
          </div>

          <div className="mb-8">
            {renderInput("companyName", "Company Name", undefined, true)}
          </div>
          <div className="mb-8">{renderInput("address", "Address Line")}</div>

          <div className="flex xl:flex-row md:flex-row lg:flex-row flex-col sm:flex-col items-center gap-4 mb-4">
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("city", "City")}
            </div>
            <div className="xl:w-[50%] md:w-[50%] lg:w-[50%] sm:w-[100%] w-[100%]">
              {renderInput("zip", "ZIP/Postal Code")}
            </div>
          </div>

          <div className="mb-8">
            {renderSelect("country", countries, "Country or Region")}
          </div>
          <div className="mb-8">
            {renderSelect("category", categories, "Select Category")}
          </div>

          <div className="textfield mb-8">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                height: 220,
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

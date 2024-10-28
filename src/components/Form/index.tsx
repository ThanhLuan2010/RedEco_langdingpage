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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          className={`textfield__input ${errors[id] ? "textfield__input--error" : ""}`}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`textfield__label ${hideRequiredMark ? "no-required" : "textfield__label--required"}`}
        >
          {placeholder}
        </label>
      </fieldset>
      {errors[id] && <small className="text-red-500 text-sm mt-1">{errors[id]}</small>}
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
    <div className="w-full pt-14 flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="w-[74%] ml-20 mx-auto">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-[50%]">{renderInput("firstName", "First Name")}</div>
            <div className="w-[50%]">{renderInput("lastName", "Last Name")}</div>
          </div>

          <div className="flex items-center gap-6 mb-4">
            <div className="w-[50%]">{renderInput("email", "Email Address", "email")}</div>
            <div className="w-[50%]">{renderInput("phone", "Phone", "tel")}</div>
          </div>

          <div className="mb-6">{renderInput("companyName", "Company Name", undefined, true)}</div>
          <div className="mb-6">{renderInput("address", "Address Line")}</div>

          <div className="flex items-center gap-6 mb-4">
            <div className="w-[50%]">{renderInput("city", "City")}</div>
            <div className="w-[50%]">{renderInput("zip", "ZIP/Postal Code")}</div>
          </div>

          <div className="mb-6">{renderSelect("country", countries, "Country or Region")}</div>
          <div className="mb-6">{renderSelect("category", categories, "Select Category")}</div>

          <div className="textfield mb-8">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                height: 220
              }}
              className={`textfield__input ${errors.message ? "textfield__input--error" : ""}`}
              placeholder="Your message"
            />
            {errors.message && <small className="text-red-500">{errors.message}</small>}
          </div>

          <div className="w-full flex justify-center">
            <Button text="SEND" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCustom;

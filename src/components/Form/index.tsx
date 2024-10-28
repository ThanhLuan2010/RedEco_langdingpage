"use client";

import React, { useState } from "react";
import * as yup from "yup";

interface formData {
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});

const FormCustom: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="w-[77%] bg-red-500">
        <div className="w-[100%] flex items-center gap-8 mb-8">
          <div className="w-[50%]">
            <input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[100%] border-[1px] h-14 p-2 rounded-lg border-blueAccent"
            />
          </div>
          <div className="w-[50%]">
            <input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-[100%] border-[1px] h-14 p-2 rounded-lg border-blueAccent"
            />
          </div>
        </div>
        <div className="w-[100%] flex items-center gap-8 mb-8">
          <div className="w-[50%]">
            <input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[100%] border-[1px] h-14 p-2 rounded-lg border-blueAccent"
            />
          </div>
          <div className="w-[50%]">
            <input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-[100%] border-[1px] h-14 p-2 rounded-lg border-blueAccent"
            />
          </div>
        </div>
        <div className="w-[100%] flex items-center gap-8 mb-8">
          <div className="w-[100%]">
            <input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-[100%] border-[1px] h-14 p-2 rounded-lg border-blueAccent"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCustom;

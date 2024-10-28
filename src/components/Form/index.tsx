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
      <div className="w-[100%] flex items-center gap-20">
        <div className="w-[35%]">
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
        <div className="w-[35%]">
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-[100%]"
          />
        </div>
      </div>
    </form>
  );
};

export default FormCustom;

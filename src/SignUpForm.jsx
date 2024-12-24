import React, { useState } from "react";
import FormHeader from "./components/FormHeader";
import InputField from "./components/InputField";
import DateOfBirthSelector from "./components/DateOfBirthSelector";
import GenderSelector from "./components/GenderSelector";
import SubmitButton from "./components/SubmitButton";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    date: "1",
    month: "Jan",
    year: "2000",
    gender: "",
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "0 auto",
        maxWidth: "300px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <FormHeader />
      <InputField
        type="text"
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <InputField
        type="text"
        name="surname"
        placeholder="Surname"
        value={formData.surname}
        onChange={handleChange}
      />
      <DateOfBirthSelector
        date={formData.date}
        month={formData.month}
        year={formData.year}
        handleChange={handleChange}
      />
      <GenderSelector gender={formData.gender} handleChange={handleChange} />
      <InputField
        type="email"
        name="emailOrPhone"
        placeholder="Mobile number or email address"
        value={formData.emailOrPhone}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        placeholder="New password"
        value={formData.password}
        onChange={handleChange}
      />
      <SubmitButton text="Sign Up" />
    </form>
  );
}

export default SignUpForm;

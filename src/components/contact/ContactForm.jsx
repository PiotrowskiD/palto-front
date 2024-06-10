import { useState } from "react";
import { submitFormData } from "../../utils/action.submitFormData.js";

export default function ContactForm() {
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
    consent: "",
  });

  const handleCheckboxChange = (e) => {
    setIsConsentChecked(e.target.checked);
    setErrors((prevErrors) => ({
      ...prevErrors,
      consent: "", // Clear the error when the checkbox is checked
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;
    if (name === "telephone") {
      // Only allow digits for telephone number
      filteredValue = value.replace(/\D/g, "");
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: filteredValue,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the user starts typing
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let formIsValid = true;
    const newErrors = { ...errors };

    // Validation checks
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      formIsValid = false;
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      formIsValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    }
    if (formData.telephone.trim().length < 9) {
      newErrors.telephone = "Telephone number must be 9 digits or longer";
      formIsValid = false;
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
      formIsValid = false;
    }
    if (!isConsentChecked) {
      newErrors.consent = "Please agree to the Privacy Policy";
      formIsValid = false;
    }
    // Add more validation checks for other fields if needed

    if (formIsValid) {
      try {
        const result = await submitFormData(formData);
        if (result.success) {
          console.log("Form submitted successfully");
          // You can perform additional actions here, such as showing a success message or redirecting the user
        } else {
          console.error("Failed to submit form:", result.message);
          // Handle the failure, such as displaying an error message to the user
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
        // Handle network or other errors
      }
    } else {
      setErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div
      className={
        "contact-form flex flex-col gap-[5px] mt-[80px] 600px:mt-[40px]"
      }
    >
      <div className={"w-[100%]"}>
        <input
          type="text"
          name="name"
          placeholder={"Name"}
          value={formData.name}
          onChange={handleFormChange}
          className={"w-[100%]"}
        />
        <p className={`error ${errors.name ? "active" : ""}`}>{errors.name}</p>
      </div>
      <div className={"w-[100%]"}>
        <input
          type="text"
          name="email"
          placeholder={"Email"}
          value={formData.email}
          onChange={handleFormChange}
          className={"w-[100%]"}
        />
        <p className={`error ${errors.email ? "active" : ""}`}>
          {errors.email}
        </p>
      </div>
      <div className={"w-[100%]"}>
        <input
          type="text"
          name="telephone"
          placeholder={"Telephone"}
          value={formData.telephone}
          onChange={handleFormChange}
          className={"w-[100%]"}
        />
        <p className={`error ${errors.telephone ? "active" : ""}`}>
          {errors.telephone}
        </p>
      </div>
      <div className={"w-[100%]"}>
        <input
          type="text"
          name="message"
          placeholder={"Message"}
          value={formData.message}
          onChange={handleFormChange}
          className={"w-[100%]"}
        />
        <p className={`error ${errors.message ? "active" : ""}`}>
          {errors.message}
        </p>
      </div>
      <div>
        <div className="checkbox-wrapper flex gap-[16px] items-start">
          <label className="custom-checkbox">
            <input
              checked={isConsentChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <p onClick={() => setIsConsentChecked(!isConsentChecked)}>
            I agree to the Privacy Policy.
          </p>
        </div>
        <p className={`error ${errors.consent ? "active" : ""}`}>
          {errors.consent}
        </p>
      </div>
      <button
        className="btn-primary self-start mt-[40px]"
        onClick={handleSubmit}
      >
        Send message
      </button>
    </div>
  );
}

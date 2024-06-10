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

  const handleCheckboxChange = (e) => {
    setIsConsentChecked(e.target.checked);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
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
        <p>Error</p>
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
        <p>Error</p>
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
        <p>Error</p>
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
        <p>Error</p>
      </div>
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
      <button
        className="btn-primary self-start mt-[40px]"
        onClick={handleSubmit}
      >
        Send message
      </button>
    </div>
  );
}

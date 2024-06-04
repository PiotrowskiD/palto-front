import { useState } from "react";

export default function ContactForm() {
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsConsentChecked(e.target.checked);
  };

  return (
    <div className={"contact-form flex flex-col gap-[20px] mt-[80px]"}>
      <input type="text" placeholder={"Name"} />
      <input type="text" placeholder={"Email"} />
      <input type="text" placeholder={"Telephone"} />
      <input type="text" placeholder={"Message"} />
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
      <button className="btn-primary self-start mt-[40px]">Send message</button>
    </div>
  );
}

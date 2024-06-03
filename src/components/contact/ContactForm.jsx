import React from "react";

export default function ContactForm() {
  return (
    <div className={"contact-form flex flex-col gap-[20px] mt-[80px]"}>
      <input type="text" placeholder={"Name"} />
      <input type="text" placeholder={"Email"} />
      <input type="text" placeholder={"Telephone"} />
      <input type="text" placeholder={"Message"} />
      <div className="checkbox-wrapper flex gap-[16px] items-center">
        {/*<div className="checkbox-container">*/}
        {/*  <input type="checkbox" id="privacy-policy" />*/}
        {/*</div>*/}
        <p>I agree to the Privacy Policy.</p>
      </div>
      <button className="btn-primary self-start mt-[40px]">Send message</button>
    </div>
  );
}

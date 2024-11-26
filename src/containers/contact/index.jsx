import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const publicKey = "G8fIoWr6_yhKNDHvf"; // Replace with your EmailJS public key
  const serviceID = "service_oav1879"; // Replace with your EmailJS service ID
  const templateID = "template_pp9aq2c";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.description,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="inputName"
                  type="text"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="inputEmail"
                  type="email"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;

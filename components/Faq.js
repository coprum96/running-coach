import React, { useState } from "react";
// import "./FAQs.css"; // Create a FAQs.css file for your styles

const FAQs = () => {
  const faqData = [
    {
      question: "What is the purpose of this FAQ?",
      answer:
        "The purpose of this FAQ is to provide answers to commonly asked questions about our service.",
    },
    {
      question: "How do I get started?",
      answer: "To get started, simply sign up on our website and follow the instructions.",
    },
    {
      question: "Is there a cost associated with using this service?",
      answer: "Our basic service is free, but we also offer premium features with a subscription.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time without any additional charges.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h4 className="faq-title">Frequently Asked Questions</h4>
      {faqData.map((faq, index) => (
        <div key={index} className={`accordion ${expandedIndex === index ? "expanded" : ""}`}>
          <div className="accordion-header" onClick={() => handleAccordionClick(index)}>
            <h6>{faq.question}</h6>
          </div>
          {expandedIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;

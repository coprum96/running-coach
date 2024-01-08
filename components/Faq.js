import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index} style={{ marginBottom: "8px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQs;

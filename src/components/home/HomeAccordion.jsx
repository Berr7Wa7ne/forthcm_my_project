import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Fort?',
    answer: `Fort is a comprehensive human capital management solution that combines 
             advanced technology and strategic human resources practices to optimize 
             workforce management. It encompasses various features such as talent 
             acquisition, talent management, compliance management, performance 
             optimization, employee engagement, and more.`,
  },
  {
    question: 'How can Fort benefit my organization?',
    answer: `Fort provides numerous benefits for your organization. It streamlines HR 
             processes, enhances talent acquisition and management, improves compliance 
             management, fosters employee engagement, boosts productivity, and supports 
             data-driven decision-making. Ultimately, it helps unlock the full potential 
             of your workforce and drives organizational success.`,
  },
  {
    question: 'Is Fort customizable to our specific needs?',
    answer: `Yes, we understand that each organization has unique requirements. Therefore, 
             Fort is highly customizable to cater to your specific needs. In configuring 
             the system, configure the system, tailor workflows, and adapt features to align 
             with your HR processes and business objectives.`,
  },
  {
    question: 'Is Fort secure and compliant with data protection regulations?',
    answer: `Absolutely. Data security and compliance are of paramount importance to us. Fort 
             incorporates robust security measures to protect sensitive information. We adhere 
             to industry best practices and comply with relevant data protection regulations, 
             ensuring your data is safeguarded.`,
  },
  {
    question: 'Can Fort scale as our organization grows?',
    answer: `Absolutely. Fort is designed to scale with your organization. Whether you are a 
             small business or an enterprise-level company, our solution can accommodate your 
             growth. It offers the flexibility to add or modify features, expand user access, 
             and adapt to your changing needs as you evolve.`,
  },
  {
    question: 'How can we get started with Fort?',
    answer: `Getting started is simple. Simply sign up on our website. Also, you can reach out 
             to our team through our website or contact us directly to schedule a consultation. 
             We will discuss your requirements, provide an overview of our solution, and guide 
             you through the implementation process. Our goal is to ensure a seamless onboarding 
             experience and set you up for success.`,
  },
];

const HomeAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[80rem] m-auto px-6 pb-8">
      <div className="pt-16 text-center flex flex-col">
        <h1 className="text-[1.4rem] md:text-[2.3rem] font-semibold font-custom">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-[#586068] font-custom">
          Everything you need to <br className="block md:hidden" /> know about Fort.
        </p>
      </div>
      <div className="mt-10 max-w-[800px] m-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq mb-[25px] pb-8 flex flex-col items-start justify-start text-start overflow-hidden border-b ${openIndex === index ? 'max-h-[500rem]' : 'max-h-[55px] md:max-h-[48px]'}`}
          >
            <div
              className="w-full flex items-center justify-between mb-[1.6rem] md:mb-[1.2rem] cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h5 className="text-base text-[#242628] font-custom">{faq.question}</h5>
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-minus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus-circle"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              )}
            </div>
            {openIndex === index && (
              <p className="text-[#667085] font-normal text-base mb-auto leading-[24px] font-custom">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAccordion;

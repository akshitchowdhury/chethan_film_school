import React, { useState, useRef, useEffect } from 'react';

const Faq = () => {
    const faqs = [
        {
          question: "What Courses does Chetan Film School offer?",
          answer: "Chetan Film School offers a range of courses, including Acting, Film Direction, Screenwriting, Cinematography, Editing, and Sound Design."
        },
        {
          question: "How do we apply for a course at Chetan Film School?",
          answer: "You can apply for a course at Chetan Film School by visiting their official website and filling out the online application form. Alternatively, you can visit the campus to apply in person."
        },
        {
          question: "Does Chetan Film School offer Weekend or Full-time Courses?",
          answer: "Yes, Chetan Film School offers both weekend and full-time courses, catering to different schedules and needs."
        },
        {
          question: "What are the timings of the classes at Chetan Film School?",
          answer: "The class timings vary depending on the course. Full-time courses typically run during the day, while weekend courses are scheduled on Saturdays and Sundays."
        },
        {
          question: "What is the minimum qualification to apply for a course at Chetan Film School?",
          answer: "The minimum qualification required is generally a high school diploma or equivalent. However, some advanced courses may have specific prerequisites."
        },
        {
          question: "Which language is the medium of instruction at Chetan Film School?",
          answer: "The medium of instruction at Chetan Film School is primarily English, though courses may also be available in regional languages depending on demand."
        },
        {
          question: "Will there be any Certification at the end of a course at Chetan Film School?",
          answer: "Yes, students will receive a certification upon successful completion of their course at Chetan Film School."
        },
        {
          question: "How much is the practical training for the acting courses at Chetan Film School?",
          answer: "Chetan Film School places a strong emphasis on practical training, with a significant portion of the acting course dedicated to hands-on exercises, workshops, and real-world experience."
        },
        {
          question: "Is there any exam at the end of a course at Chetan Film School?",
          answer: "Yes, most courses at Chetan Film School conclude with a final assessment or project, which may include exams, practical demonstrations, or portfolio reviews."
        },
        {
          question: "Is there any prior experience required to join Chetan Film School?",
          answer: "No prior experience is required to join most courses at Chetan Film School. The school offers beginner courses designed for those new to the field."
        }
      ];

      const [openIndex, setOpenIndex] = useState(null);
      const [answerRefs, setAnswerRefs] = useState([]);
    
      useEffect(() => {
        setAnswerRefs(faqs.map(() => React.createRef()));
      }, [faqs]);
    
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      useEffect(() => {
        answerRefs.forEach((ref, index) => {
          if (ref.current) {
            if (index === openIndex) {
              ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
            } else {
              ref.current.style.maxHeight = '0px';
            }
          }
        });
      }, [openIndex, answerRefs]);
    
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-left font-semibold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  ref={answerRefs[index]}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: '0px' }}
                >
                  <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Faq;
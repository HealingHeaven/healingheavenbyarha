import React, { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import plus from "../assets/Frame 24.png"
import minus from "../assets/Frame 23.png";
;
const faqsData = [
    {
        question: "How can we trust you?",
        answer: "Mental health is a state of well-being that includes our thoughts, feelings, behaviors, and beliefs. It’s a basic human right that allows people to cope with stress, learn, work, and contribute to their community.",
    },
    {
        question: "What services do you offer?",
        answer: "We provide online therapy sessions, mental health assessments, and personalized counseling by certified professionals.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely! We prioritize data security with end-to-end encryption to keep your personal details and sessions completely private.",
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-3xl mx-auto px-6 py-10 my-5">
            <h2 className="text-3xl font-bold mb-6">FAQ’s</h2>
            <div className="space-y-4">
                {faqsData.map((faq, index) => (
                    <div key={index} className="bg-[#ffd2fedb] rounded-lg overflow-hidden">
                        {/* Question */}
                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center px-6 py-4 font-semibold text-lg"
                        >
                            {faq.question}
                            <span className="text-sm">
                                {openIndex === index ? <img src={minus} alt="" width={30} /> : <img src={plus} alt="" width={30} />}
                            </span>
                        </button>

                        {/* Answer with smooth transition */}
                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 py-3 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faqs;

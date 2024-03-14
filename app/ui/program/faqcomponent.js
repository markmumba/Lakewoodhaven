
'use client';

import { useState } from "react";

function FAQ({ faq, isFirst }) {
    const [showAnswer, setShowAnswer] = useState(isFirst);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="mb-4 py-2">
            <div className="flex justify-between items-center border-b-2 p-2">
                <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                <button onClick={toggleAnswer} className="focus:outline-none">
                    {showAnswer ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {showAnswer && <p className="mt-2 text-xl font-bold">{faq.answers}</p>}
        </div>
    );
}

export default FAQ;
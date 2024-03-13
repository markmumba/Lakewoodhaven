'use client';
import { useState } from 'react';


const faqs = [
  {
    "question": "What is the age range for children attending kindergarten?",
    "answers": "The age range for children attending kindergarten typically falls between 4 to 6 years old, although this can vary depending on the country or educational system."
  },
  {
    "question": "What is the typical daily schedule for kindergarten students?",
    "answers": "A typical daily schedule for kindergarten students often includes a mix of activities such as circle time, academic lessons (reading, math), playtime, snack or meal times, outdoor play, and rest or quiet time."
  },
  {
    "question": "How does kindergarten prepare children for elementary school?",
    "answers": "Kindergarten prepares children for elementary school by focusing on foundational skills such as literacy, numeracy, social interaction, and self-regulation. It provides a structured environment where children learn to follow routines, interact with peers, and develop essential academic and life skills."
  },
  {
    "question": "What curriculum or educational approach does the kindergarten follow?",
    "answers": "The curriculum or educational approach followed by kindergartens may vary, but commonly include play-based learning, Montessori, Reggio Emilia, Waldorf, or traditional academic models."
  },
  {
    "question": "How are kindergarten classrooms structured to support learning and development?",
    "answers": "Kindergarten classrooms are typically designed to be child-centered and supportive of active learning. They often feature designated areas for different types of activities, including reading corners, art stations, manipulative play areas, and outdoor spaces for exploration."
  },
  {
    "question": "What role does play have in the kindergarten curriculum?",
    "answers": "Play is a fundamental component of the kindergarten curriculum, as it supports children's cognitive, social, emotional, and physical development. Through play, children learn to problem-solve, communicate, collaborate, and regulate their emotions."
  },
  {
    "question": "How do kindergarten teachers assess students' progress and growth?",
    "answers": "Kindergarten teachers use various assessment methods, including observations, informal assessments, standardized tests, and portfolio assessments. They assess students' progress in academic areas as well as social-emotional development, providing feedback to support continued growth."
  },
  {
    "question": "What opportunities are there for parental involvement in kindergarten?",
    "answers": "Parental involvement in kindergarten may include volunteering in the classroom, attending parent-teacher conferences, participating in school events and fundraisers, and supporting learning activities at home."
  },
  {
    "question": "How are kindergarten classrooms designed to promote safety and comfort?",
    "answers": "Kindergarten classrooms are designed with safety and comfort in mind, featuring age-appropriate furniture, child-proofing measures, accessible materials, and clear traffic flow. Teachers also establish clear rules and routines to ensure a safe and supportive learning environment."
  },
  {
    "question": "How does the kindergarten address the diverse needs of students?",
    "answers": "Kindergarten addresses the diverse needs of students through differentiated instruction, individualized support, and accommodations or modifications as needed. Teachers strive to create inclusive classrooms where all children feel valued and supported."
  },
  {
    "question": "What extracurricular activities or enrichment programs are available for kindergarten students?",
    "answers": "Extracurricular activities and enrichment programs for kindergarten students may include art, music, physical education, foreign language instruction, STEM activities, gardening, and community service projects, among others."
  },
  {
    "question": "How are social-emotional skills fostered in the kindergarten setting?",
    "answers": "Social-emotional skills are fostered in the kindergarten setting through activities such as cooperative play, group discussions, conflict resolution exercises, mindfulness practices, and social skills lessons. Teachers provide guidance and support to help children develop empathy, self-awareness, and positive relationships."
  },
  {
    "question": "What resources are available to support kindergarten students with special needs or learning differences?",
    "answers": "Kindergarten may offer various resources to support students with special needs or learning differences, including special education services, speech therapy, occupational therapy, counseling, and individualized education plans (IEPs) or accommodations."
  },
  {
    "question": "How does the kindergarten handle transitions, such as from home to school or from kindergarten to elementary school?",
    "answers": "Kindergarten supports transitions through orientation activities, communication with families, gradual entry procedures, and opportunities for children to develop routines and familiarity with the school environment. Teachers and staff provide emotional support and guidance to ease transitions and ensure a smooth adjustment."
  },
  {
    "question": "What communication channels are in place for parents to stay informed about their child's kindergarten experience?",
    "answers": "Communication channels for parents may include newsletters, emails, parent-teacher conferences, online platforms, and classroom websites or apps. Open communication between teachers and parents fosters collaboration and supports children's learning and development."
  }
]



function FAQ({ faq }) {
    const [showAnswer, setShowAnswer] = useState(false);

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

function FAQSection() {
    return (
        <div className="w-full md:px-20 lg:px-72 mx-auto my-10 md:my-40 px-2">
            <h1 className='font-bold text-3xl md:text-6xl py-8'>FAQ's</h1>
            {faqs.map((faq, index) => (
                <FAQ key={index} faq={faq} />
            ))}
        </div>
    );
}

export default FAQSection;




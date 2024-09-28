import React, { useEffect, useState } from 'react'

const faq = [
    {
        question: "How do I Find car or bike for trip?",
        answer: "answer not mention here",
        category: "booking"
    },
    {
        question: "How can i extend my trip Date after booking?",
        answer: "answer not mention here",
        category: "booking"
    },
    {
        question: "Am i responsible for fuel?",
        answer: "answer not mention here",
        category: "booking"
    },
    {
        question: "How can i apply to promo code?",
        answer: "answer not mention here",
        category: "booking"
    },
    {
        question: "Can i book car or bike under 20 age group?",
        answer: "answer not mention here",
        category: "booking"
    },
    {
        question: "How do I Find car or bike for trip?",
        answer: "answer not mention here",
        category: "general"
    },
    {
        question: "How can i extend my trip Date after booking?",
        answer: "answer not mention here",
        category: "genral"
    },
    {
        question: "Am i responsible for fuel?",
        answer: "answer not mention here",
        category: "general"
    },
    {
        question: "How can i apply to promo code?",
        answer: "answer not mention here",
        category: "security"
    },
    {
        question: "Can i book car or bike under 20 age group?",
        answer: "answer not mention here",
        category: "other"
    },
]


const FAQ = () => {


    return (
        <section className="h-auto min-h-auto content-center text-zinc-700 bg-zinc-200">
            <div className=" text-center mx-auto sm:px-4 md:w-2/3">
                <h4 className='capitalize sm:text-3xl md:text-5xl font-bold py-5'>Have any question</h4>
                <div className="text-start gap-4 grid grid-cols-2 mt-3 pb-8">
                    {
                        faq.map((elem, index) => (
                            <div className="collapse collapse-plus border-2 border-zinc-300 shadow-sm bg-zinc-100 p-1 rounded-lg" key={index}>
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">{elem.question}</div>
                                <div className="collapse-content">
                                    {elem.answer}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default FAQ
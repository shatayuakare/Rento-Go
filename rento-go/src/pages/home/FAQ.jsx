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

    const [list, setList] = useState([])
    const getList = (category) => {
        const data = faq.filter((elem) => elem.category === category)
        setList(data)
    }
    useEffect(() => {

        // setList(getList('general'))

    }, [])

    return (
        <section className="h-auto min-h-auto text-zinc-700 bg-zinc-200">
            <div className="py-10 text-center mx-auto sm:px-4 md:w-2/3">
                <h4 className='capitalize sm:text-3xl md:text-5xl font-bold py-5'>Have any question</h4>
                <div role="tablist" className="tabs tabs-lifted">
                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="General"
                        defaultChecked
                        onClick={() => getList('general')}
                    />
                    <div role="tabpanel" className="tab-content">

                        {
                            list.map((elem, index) => (
                                <div className="collapse collapse-plus" key={index}>
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-medium">{elem.question}</div>
                                    <div className="collapse-content">
                                        {elem.answer}

                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className="tab"
                        aria-label="Security"
                        onClick={() => getList('security')}
                    />
                    <div role="tabpanel" className="tab-content">
                        {
                            list.map((elem, index) => (
                                <div className="collapse collapse-plus rounded-sm text-start border-2 border-zinc-300" key={index}>
                                    <input type="radio" name="security" />
                                    <div className="collapse-title text-xl font-medium">
                                        {elem.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{elem.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Booking" onClick={() => getList('booking')} />
                    <div role="tabpanel" className="tab-content flex rounded-md ">
                        {
                            list.map((elem, index) => (
                                <div className="collapse collapse-plus rounded-sm text-start border-2 border-zinc-300" key={index}>
                                    <input type="radio" name="booking" />
                                    <div className="collapse-title text-xl font-medium">
                                        {elem.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{elem.answer}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Other" onClick={() => getList('other')} />
                    <div role="tabpanel" className="tab-content flex rounded-md">
                        {
                            list.map((elem, index) => (
                                <div className="collapse collapse-plus rounded-sm text-start border-2 border-zinc-300" key={index}>
                                    <input type="radio" name="faq" />
                                    <div className="collapse-title text-xl font-medium">
                                        {elem.question}
                                    </div>
                                    <div className="collapse-content">
                                        <p>{elem.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default FAQ
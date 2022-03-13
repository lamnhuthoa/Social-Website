import React from 'react'
import './Work.css'

export default function Work() {

    const workList = [
        {
            "title": "Simon Game",
            "sourceCode": "https://github.com/lamnhuthoa/Simon-Game",
            "viewSite": "https://lamnhuthoa.github.io/Simon-Game/",
            "img": "./img/work/simon.png",
            "button2": "Play game"
        },
        {
            "title": "Mini Todos",
            "sourceCode": "https://github.com/lamnhuthoa/Todo-List-App-for-Minimalist",
            "viewSite": "https://mini-todos.netlify.app/",
            "img": "./img/work/todos.png",
            "button2": "Write todos"
        },
    ]

    return (
        <div className="work-container" id="work">
            <div className="work-content container">
                    {workList.map(work => (
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work.img} width="100%" height="100%" />
                                </div>
                                <div className="flip-card-back">
                                    <div className="flip-card-text">
                                        <h1>{work.title}</h1>
                                    </div>
                                    <div className="flip-card-link">
                                        <a href={work.sourceCode}>Source code</a>
                                        <a href={work.viewSite}>{work.button2}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

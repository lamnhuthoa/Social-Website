import React from 'react'
import './About.css'
import styled from 'styled-components'

export default function About() {

    const contents = ['A Front-end Developer', 'Works @ BOSCH', 'Lives in Vietnam', 'Was born in 1999', 'Graduated from UEH University', 'Speaks English, Vietnamese', 'Loves coffee, arts', 'Enjoys playing the instruments']

    return (
        <div className="about-container" id="about">
            <div className="about-content container">
                <div className="normal-screen">
                    <div>
                        <p className="text-center about-title">Hòa</p>
                    </div>
                    <Wrap>
                        {contents.map((content, index) => {
                            return (
                                <Item className="about-text" id={index}>
                                    {content}
                                </Item>
                            )
                        })}
                    </Wrap>
                </div>

                <div className="responsive d-flex flex-column align-items-center">
                    <div><p className="text-center about-title">Hòa</p></div>
                    <ul className="d-flex flex-column justify-content-center">
                        {contents.map((content, index) => {
                            return (
                                <li className="about-text" id={index}>{content}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 20px;
    justify-content: center;
`

const Item = styled.div`
    font-size: 2rem;
    &:nth-child(1),
    :nth-child(3),
    :nth-child(5),
    :nth-child(7) {
        text-align: right;
    }
`
import React, { useState } from 'react';
import lom from '../img/lom.gif';;

export const FormComponent = () => {

    //Progress bar
    const [progress, setProgress] = useState(0);

    //Result
    const [result, setResult] = useState(0);

    //check anwsers
    const checkInput = e => {

        //For the correct anwsers
        const itsCorrect = (id) => {

            let element = document.getElementById(id);
            element.classList.add("correct", "disabled");
            element.setAttribute('disabled', '');

            //add progress
            setProgress(progress + 10);

            //add correct
            setResult(result + 1);
        }

        //For the wrong anwsers
        const itsWrong = (id, value) => {

            let element = document.getElementById(id);
            element.classList.add("error", "disabled");
            element.setAttribute('disabled', '');

            //Show correct anwser
            let parentElement = document.getElementById(e.target.parentElement.attributes.id.value);
            let newElement = document.createElement("p");
            newElement.innerHTML = "The correct anwser is: " + value;
            newElement.classList.add("msg-error");
            parentElement.appendChild(newElement);

            //add progress
            setProgress(progress + 10);
        }

        //Check if there is a response or no
        if (e.target.value !== "") {

            //check if the response is correct
            if (e.target.id === "p1") {
                if (e.target.value.toLowerCase() === "einstein") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Einstein");
                }

            } else if (e.target.id === "p2") {

                if (e.target.value === "3") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "3");
                }

            } else if (e.target.id === "p3") {

                if (e.target.value === "2022") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "2022");
                }

            } else if (e.target.id === "p4") {

                if (e.target.value === "Amazonas") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Amazonas");
                }

            } else if (e.target.id === "p5") {

                if (e.target.value.toLowerCase() === "jose") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Jose");
                }

            } else if (e.target.id === "p6") {

                if (e.target.value === "Greenland") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Greenland");
                }

            } else if (e.target.id === "p7") {

                if (e.target.value === "Español") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Español");
                }

            } else if (e.target.id === "p8") {

                if (e.target.value === "1914") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "1914");
                }

            } else if (e.target.id === "p9") {

                if (e.target.value.toLowerCase() === "barcelona") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Barcelona");
                }

            } else if (e.target.id === "p10") {

                if (e.target.value === "Lionel Andrés Messi Cuccittini") {
                    itsCorrect(e.target.id);
                } else {
                    itsWrong(e.target.id, "Lionel Andrés Messi Cuccittini");
                }
            }

        }
    }

    return (
        <div className='form-component'>
            <div className='form-card'>
                <div className="form-content">
                    <h1>Last chance for humanity</h1>
                    <p className="description">The future of humanity depends on you. You won't get another chance, make no mistake.</p>

                    <form>
                        {/*p1*/}
                        <div id="d1">
                            <label htmlFor="p1">What is the surname of the leading creator of relativity theory called Albert</label>
                            <input type="text" id="p1" onBlur={e => checkInput(e)} />
                        </div>

                        {/*p2*/}
                        <div id="d2">
                            <label htmlFor="p2">12 / 4 =</label>
                            <select type="text" id="p2" onChange={e => checkInput(e)} >
                                <option value="">Select one....</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        {/*p3*/}
                        <div id="d3">
                            <label htmlFor="p3">Current year?</label>
                            <input type="number" id="p3" onBlur={e => checkInput(e)} onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                        </div>

                        {/*p4*/}
                        <div id="d4">
                            <label htmlFor="p4">Big river in Brazil</label>
                            <select type="text" id="p4" onChange={e => checkInput(e)}>
                                <option value="">Select one....</option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Guadalquivir">Guadalquivir</option>
                                <option value="Nilo">Nilo</option>
                            </select>
                        </div>

                        {/*p5*/}
                        <div id="d5">
                            <label htmlFor="p5">Most used Spanish male name:</label>
                            <input type="text" id="p5" onBlur={e => checkInput(e)} />
                        </div>

                        {/*p6*/}
                        <div id="d6">
                            <label htmlFor="p6">Which is the biggest island in the world?</label>
                            <select type="text" id="p6" onChange={e => checkInput(e)}>
                                <option value="">Select one....</option>
                                <option value="Menorca">Menorca</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>

                        {/*p7*/}
                        <div id="d7">
                            <label htmlFor="p7">Gibraltar is?</label>
                            <select type="text" id="p7" onChange={e => checkInput(e)}>
                                <option value="">Select one....</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Español">Español</option>
                                <option value="Canada">Canada</option>
                            </select>
                        </div>

                        {/*p8*/}
                        <div id="d8">
                            <label htmlFor="p8">When the first world war started?</label>
                            <input type="number" id="p8" onBlur={e => checkInput(e)} onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} />
                        </div>

                        {/*p9*/}
                        <div id="d9">
                            <label htmlFor="p9">Where has been celebrated the 1992 J.J.0.0</label>
                            <input type="text" id="p9" onBlur={e => checkInput(e)} />
                        </div>

                        {/*p10*/}
                        <div id="d10">
                            <label htmlFor="p10">Wich is the best player in the football history?</label>
                            <select type="text" id="p10" onChange={e => checkInput(e)}>
                                <option value="">Select one....</option>
                                <option value="Lionel Andrés Messi Cuccittini">Lionel Andrés Messi Cuccittini</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            {(progress === 100 &&
                <div className='result'>
                    <p>You anwser correctly {result}/10 questions. Do you think humanity deserves a second chance?</p>

                </div>
            )}

            <div className='progress-bar'>
                {/*<div className="current-status" style={{width:'50px'}}></div>*/}
                <div className="current-status" style={{ width: 100 - progress + '%' }}></div>
                <span className='current-value'>{progress}%</span>
            </div>

            <div className='lom'>
                <img src={lom} alt="lom"></img>
            </div>
        </div>
    )
}

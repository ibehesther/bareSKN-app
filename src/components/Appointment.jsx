import { Component } from "react";
import Images from "./Images";

class Appointment extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div className="appointment-container">
                <Images imageType='consultation'/>
                <p>
                    BareSKN offers a wide range of procedures by a licensed esthetician.
                    You can book an appointment today.
                </p>
                <p>Below are some procedures offered at BareSKN:</p>
                <section>
                    <h2>Skin consultation</h2>
                    <div> 
                        Our esthetician would cleanse the skin and examine
                        under a magnifying glass. To determine skin types and 
                        profer possible solution to presented skin issues.
                    </div>
                    <p className="procedure-price"> $100</p>
                </section>
                <section>
                    <h2>Chemical peel</h2>
                    <div>
                        The purpose of chemical peel is to
                        improve the appearance of the skin by inducing
                        of the outer layer of the skin to peel. This new layer is
                        generally brightened with fewer wrinkles. This is a type of
                        advanced chemical exfoliation.
                    </div>
                    <p className="procedure-price"> $500 </p>
                </section>
                <section>
                    <h2>Dermabrasion and Microdermabrasion</h2>
                    <div>
                        Dermabrasion is a more physical exfoliation technoque of removing
                        dead skin cells. Microdermabrasion is a lighter version of 
                        the exfoliation procedure. Dermabrasion is suited for deep scarring 
                        or advanced hyperpigmentation.
                    </div>
                    <p className="procedure-price">$350</p>
                </section>
                <section>
                    <h2>Microneedling</h2>
                    <div>
                        Microneedling is performed with the intention of increasing
                        collagen production.It results in smoother skin with an improve
                        texture and complexion. It is often recommended to fade
                        long term scarring

                    </div>
                    <p className="procedure-price">$280</p>
                </section>
                <section>
                    <h2>LED Acne Therapy</h2>
                    <div>
                        This involves using LED lights in the hopes of killing
                        off the bacteria that frequently causes acne. Emmitting 
                        red or blue LED lights on the face for an extended period 
                        of time is usually performed in this sectioneatment.
                    </div>
                    <p className="procedure-price">$750</p>
                </section>
                <section>
                    <h3>Appointment Form</h3>
                    <div className='appointment-icon'>
                        <img src={require("../icons/appointment.png")} alt="" />
                    </div>
                    <form action="/" method="post" className="appointment-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="datetime">Appointment Date</label>
                        <input type="datetime" name="datetime" id="" />
                        <label htmlFor="procedure">Preferred procedure(s)</label>
                        <select name="procedure" id="" multiple value={[]}>
                            <option value="skin consultaion">Skin consultation</option>
                            <option value="chemical peel">Chemical Peel</option>
                            <option value="dermabrasion">Dermabrasion</option>
                            <option value="microdermabrasion">Microdermabrasion</option>
                            <option value="microneedling">Microneedling</option>
                            <option value="led acne therapy">LED Acne Therapy</option>
                        </select>
                        <button type="submit">BOOK</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Appointment;
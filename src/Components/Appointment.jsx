import { Component } from "react";

class Appointment extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div className="appointment-container">
                <p>
                    BareSKN offers a wide range of procedures by a licensed esthetician.
                    You can book an appointment today.
                </p>
                <p>Below are some procedures offered at BareSKN:</p>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price ($)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Skin consultation</td>
                            <td> 
                                Our esthetician would cleanse the skin and examine
                                under a magnifying glass. To determine skin types and 
                                profer possible solution to presented skin issues.
                            </td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Chemical Peel</td>
                            <td>
                                The purpose of chemical peel is to
                                improve the appearance of the skin by inducing
                                of the outer layer of the skin to peel. This new layer is
                                generally brightened with fewer wrinkles. This is a type of
                                advanced chemical exfoliation.
                            </td>
                            <td> 500 </td>
                        </tr>
                        <tr>
                            <td>Dermabrasion and Microdermabrasion</td>
                            <td>
                                Dermabrasion is a more physical exfoliation technoque of removing
                                dead skin cells. Microdermabrasion is a lighter version of 
                                the exfoliation procedure. Dermabrasion is suited for deep scarring 
                                or advanced hyperpigmentation.
                            </td>
                            <td>
                                350
                            </td>
                        </tr>
                        <tr>
                            <td>Microneedling</td>
                            <td>
                                Microneedling is performed with the intention of increasing
                                collagen production.It results in smoother skin with an improve
                                texture and complexion. It is often recommended to fade
                                long term scarring

                            </td>
                            <td>
                                280
                            </td>
                        </tr>
                        <tr>
                            <td>LED Acne Therapy</td>
                            <td>
                                This involves using LED lights in the hopes of killing
                                off the bacteria that frequently causes acne. Emmitting 
                                red or blue LED lights on the face for an extended period 
                                of time is usually performed in this treatment.
                            </td>
                            <td>
                                750
                            </td>
                        </tr>
                    </tbody>
                </table>
                <section>
                    <form action="/" method="post" className="appointment-form">
                        {/* <legend>Appointment</legend> */}
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="datetime">Appointment Date</label>
                        <input type="datetime" name="datetime" id="" />
                        <label htmlFor="procedure">Preferred procedure(s)</label>
                        <select name="procedure" id="" multiple>
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
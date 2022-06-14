import {Component} from "react";
import Card from "./Card";

class PageSection extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <section className="page-section">
                <span className="page-section-title">OUR COLLECTIONS</span>
                <div className="page-section-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        );
    }

}

export default PageSection;
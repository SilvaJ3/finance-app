import React, { Component, Fragment } from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                    <section>
                        <div className="container p-5">

                            <h1 className="text-center text-decoration-underline">Qui sommes-nous?</h1>

                        </div>
                    </section>
                <Footer/>
            </Fragment>
        )
    }
}

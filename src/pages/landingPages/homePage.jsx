import React from "react";
import Card1 from "../../components/Card1";
import BigButton from "../../components/BigButton";
import LittleButton from "../../components/LittleButton"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <section className="px-4 py-8">
            <BigButton></BigButton>
            <div className="h-30"></div>
            <LittleButton></LittleButton>
            <div className="h-30"></div>
            <Card1></Card1>
            <div className="h-30"></div>
            <Header></Header>
            <div className="h-30"></div>
            <Footer></Footer>
        </section>
    )
}

export default HomePage;
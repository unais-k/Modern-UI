import React from "react";
import styles from "./style";
import {
    Billing,
    Business,
    CTA,
    CardDeal,
    Clients,
    Footer,
    Hero,
    Navbar,
    Stats,
    Testimonials,
} from "./Components/index.js";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    aaaa
                </div>
            </div>
            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}  ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;

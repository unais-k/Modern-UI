import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div />
        <div className="w-full flex justify-between items-center md:flex-row flex-col mb-6 sm:mb-16 z-[1] relative">
            <h1 className={styles.heading2}>
                What people are <br className="sm:block hidden" />
                saying about us
            </h1>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div className="flex flex-wrap sm:justify-start lg:justify-evenly justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Testimonials;

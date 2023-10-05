import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function Accordion({ title, links }) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col mx-auto my-4 w-[80%]">
            <div onClick={() => setShow(!show)} className="flex flex-row justify-between items-center">
                <h1
                    className={`font-poppins font-medium text-[18px] leading-[27px] text-dimWhite hover:text-secondary cursor-pointer`}
                >
                    {title}
                </h1>
                <BiChevronDown
                    color="white"
                    className={`text-3xl transition-all duration-500 ${show ? "rotate-180" : ""}`}
                />
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-clip"
                    >
                        <ul className="list-none mt-4">
                            {links.map((item, index) => {
                                return (
                                    <li
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index !== links.length - 1 ? "mb-4" : "mb-0"
                                        } `}
                                        key={index}
                                    >
                                        {item.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Accordion;

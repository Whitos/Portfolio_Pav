import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import profilePic from "../assets/imgProfile.jpg";
import { HERO_CONTENT, MOTIVATION } from "../constants";

const Hero = () => {
    const name = "Pavel Tsanev";

    const letterAnimation = {
        visible: (i) => ({
            textShadow: "0px 0px 8px rgba(255,255,255,1)", // Glow blanc lumineux
            color: "white", // Maintenir la couleur blanche
            transition: {
                delay: i * 1.0, // Décalage progressif entre les lettres
                duration: 1.0, // Durée d'illumination
                repeat: Infinity, // Boucle infinie
                repeatType: "reverse", // Retourne à l'état initial
            },
        }),
        hidden: {
            textShadow: "0px 0px 0px rgba(255, 255, 255, 0)", // Pas de glow au départ
            color: "white", // Couleur de base blanche
        },
    };

    return (
        <div id="debut" className="text-white border-b border-neutral-900 pb-4 lg:mb-35 p-10">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1
                            className="
                                pb-16 
                                text-9xl 
                                font-thin 
                                tracking-tight 
                                lg:mt-14 
                                lg:text-10xl
                                relative 
                                overflow-hidden
                            "
                        >
                            {name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    variants={letterAnimation}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Etudiant en BTS Services informatiques aux organisations",
                                        "Full Stack Développeur",
                                        "Passionné de développement web",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 1.0,
                                }}
                            />
                        </span>
                        <p className="my-10 max-w-xl py-6 from-neutral-600 tracking-tighter text-lg">
                            {HERO_CONTENT} <br />
                            <br />
                            {MOTIVATION}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-end translate-x-10 translate-y-24 p-24">
                        <img
                            className="rounded-lg shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]"
                            src={profilePic}
                            alt="TSANEV Pavel"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

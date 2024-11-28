import { HERO_CONTENT } from "../constants";
import { MOTIVATION } from "../constants";
import profilePic from "../assets/imgProfile.jpg";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className="text-white border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Pavel Tsanev
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Full Stack Développeur',
                                        'Etudiant en BTS SIO',
                                        'Passionné de développement web',
                                        'Développeur Mobile Android'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT} <br /><br />
                            {MOTIVATION}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
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

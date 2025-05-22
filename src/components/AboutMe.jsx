//import aboutImg from "/assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const AboutMe = () => {
    return <>
        <div id="a-propos-de-moi" className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-white">A Propos
                <span className="text-neutral-500"> de Moi</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    {/* <div className="flex items-center justify-center">
                        <img className="rounded-lg" src={aboutImg} alt="about" />
                    </div> */}
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start text-white">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    </>

}

export default AboutMe
import { ABOUT_TEXT } from "../constants";

const AboutMe = () => {
  return (
    <section id="a-propos-de-moi" className="border-b border-neutral-800 py-24">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        À propos <span className="text-neutral-500">de moi</span>
      </h2>

      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-lg leading-relaxed text-neutral-300 whitespace-pre-line">
          {ABOUT_TEXT}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

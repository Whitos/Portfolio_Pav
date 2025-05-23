import { useState } from "react"
import { Download } from "lucide-react"

const Documents = () => {
  const [zoomedImage, setZoomedImage] = useState(null)

  return (
    <section
      id="documents"
      className="max-w-6xl mx-auto px-4 py-24 text-white relative z-10"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-center uppercase tracking-widest">
        Mes documents
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* CV */}
        <div className="flex flex-col justify-between h-[540px] bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-violet-400">
              Mon CV
            </h3>

            <img
              src="/assets/documents/cv.png"
              alt="Aperçu du CV"
              className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto w-[280px] h-80"
              onClick={() => setZoomedImage("/assets/documents/CVHD.jpg")}
            />
          </div>

          <a
            href="/assets/documents/CV_Pavel_Tsanev.pdf"
            download="CV_Pavel_Tsanev.pdf"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mx-auto"
          >
            <Download className="w-5 h-5" /> Télécharger
          </a>
        </div>

        {/* Tableau de compétences */}
        <div className="flex flex-col justify-between h-[540px] bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-violet-400">
              Tableau de compétences
            </h3>

            <img
              src="/assets/documents/tbl.png"
              alt="Aperçu du tableau"
              className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto w-[280px] h-80"
              onClick={() => setZoomedImage("/assets/documents/TableauHD.jpg")}
            />
          </div>

          <a
            href="/assets/documents/Tableau_Competences.pdf"
            download="Tableau_Competences.pdf"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mx-auto"
          >
            <Download className="w-5 h-5" /> Télécharger
          </a>
        </div>

        {/* Veille Technologique */}
        <div className="flex flex-col justify-between h-[540px] bg-gradient-to-br from-[#111] to-[#1c1c1c] p-6 rounded-2xl shadow-xl border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-violet-400">
              Veille Technologique
            </h3>

            <img
              src="/assets/documents/veille.png"
              alt="Aperçu de la veille"
              className="rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto w-[280px] h-80"
              onClick={() => setZoomedImage("/assets/documents/VeilleHD.jpg")}
            />
          </div>

          <a
            href="/assets/documents/Veille_Technologique.pdf"
            download="Tableau_Competences.pdf"
            className="mt-6 inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 mx-auto"
          >
            <Download className="w-5 h-5" /> Télécharger
          </a>
        </div>

      </div>

      {/* Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoom document"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl border border-white/20 scale-100 transition-transform duration-300"
          />
        </div>
      )}
    </section>
  )
}

export default Documents

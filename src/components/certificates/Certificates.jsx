import { motion } from "motion/react";

import Container from "../ui/Container";
import CertCard from "./CertCard";

import certificates from "../../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="
        bg-[#030712]
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      <Container>

        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            w-full
            flex
            flex-col
            items-center
            text-center
            mb-14
            lg:mb-16
          "
        >

          <p
            className="
              text-cyan-400
              uppercase
              tracking-[0.35em]
              font-semibold
              text-sm
              mb-4
              text-center
            "
          >
            Certifications
          </p>

          <h2
            className="
              text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
              text-white
              mb-5
              text-center
            "
          >
            Certificates
          </h2>

          <p
            className="
              w-full
              max-w-3xl
              text-gray-400
              text-lg
              md:text-xl
              leading-relaxed
              text-center
            "
          >
            Professional learning milestones that demonstrate my
            continuous development across data science, machine learning,
            artificial intelligence, and software development.
          </p>

        </motion.div>

        {/* ========================================
            CERTIFICATE GRID
        ======================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            items-stretch
          "
        >

          {certificates.map((certificate) => (

            <CertCard
              key={certificate.id}
              certificate={certificate}
            />

          ))}

          {/* ========================================
              ADD CERTIFICATE CARD
          ======================================== */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="
              min-w-0
              min-h-[430px]
              h-full
              rounded-2xl
              border
              border-dashed
              border-white/15
              bg-white/[0.02]
              flex
              items-center
              justify-center
              p-8
              text-center
              transition
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.03]
            "
          >

            <div className="max-w-md">

              <div className="text-5xl mb-5">
                ＋
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                  mb-3
                "
              >
                Add Certificate
              </h3>

              <p
                className="
                  text-gray-400
                  leading-relaxed
                  text-center
                "
              >
                Add your future certificates here by placing the certificate
                file in the public certificates folder and adding its details
                to the certificates data file.
              </p>

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default Certificates;
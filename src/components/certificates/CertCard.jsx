import { motion } from "motion/react";

function CertCard({ certificate }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-6
        transition
        duration-300
        hover:border-cyan-400/30
        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >
      {/* ========================================
          CERTIFICATE PREVIEW
      ======================================== */}

      <div
        className="
          relative
          h-64
          rounded-xl
          overflow-hidden
          border
          border-white/10
          bg-white
          mb-6
        "
      >
        <iframe
          src={`${certificate.file}#page=1&view=FitH&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=1`}
          title={certificate.title}
          className="
            absolute
            inset-0
            w-full
            h-full
            border-0
            block
          "
          style={{
            overflowX: "hidden",
            overflowY: "auto",
          }}
        />
      </div>

      {/* ========================================
          CERTIFICATE INFORMATION
      ======================================== */}

      <div className="text-center">
        <p
          className="
            text-cyan-400
            text-sm
            font-semibold
            uppercase
            tracking-wider
            mb-2
          "
        >
          Certificate
        </p>

        <h3
          className="
            text-2xl
            font-bold
            text-white
            mb-2
          "
        >
          {certificate.title}
        </h3>

        <p className="text-gray-400 mb-4">
          Issued by {certificate.issuer}
        </p>

        <p
          className="
            text-gray-400
            leading-relaxed
            mb-6
            max-w-xl
            mx-auto
          "
        >
          {certificate.description}
        </p>

        <a
          href={certificate.file}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-5
            py-2.5
            text-sm
            font-semibold
            text-cyan-300
            transition
            duration-200
            hover:bg-cyan-400/20
            hover:text-cyan-200
          "
        >
          Open Certificate →
        </a>
      </div>
    </motion.article>
  );
}

export default CertCard;
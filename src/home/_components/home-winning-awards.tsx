import codebilityHackaton from "src/assets/codebility-hackaton.jpg";
import { motion } from "framer-motion";
export default function HoneWinningAwards() {
  return (
    <>
      <div className="flex flex-col mt-[4.5em] ">
        <motion.p
          className="text-[#030712] font-inter-tight text-[3rem] not-italic font-semibold leading-[1em] transition-all duration-1000 ease-in-out"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
            },
          }}
        >
          Hackaton Event
        </motion.p>
        <div className="md:flex md:items-start gap-[3.5em]  mt-[3.125em]">
          <motion.img
            src={codebilityHackaton}
            alt=""
            className="w-full md:w-[21em] md:h-[22.6875em] rounded-[0.3125em] bg-cover transition-all duration-1000 ease-in-out "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
              },
            }}
          />

          <div className="flex flex-col md:h-[22.6875em] mt-[2em] md:mt-0">
            <motion.p
              className="text-[#030712] font-inter-tight text-[1.375rem] font-semibold transition-all duration-1000 ease-in-out "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            >
              Codebility Hackathon 2024 — 1st Place
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            >
              Project: DineMate
            </motion.p>

            <motion.p
              className="text-[#6B7280] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            >
              Role: Frontend Developer
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] mt-[0.5em] transition-all duration-1000 ease-in-out "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            >
              A real-time dining platform connecting users and restaurants
              through smart recommendations and table matching.
            </motion.p>

            <div className="flex items-center gap-[1em]">
              <motion.a
                href="https://dinemate-fe.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-inter-tight font-normal text-[1.125rem] mt-[0.5em]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                  },
                }}
              >
                🔗 Live Demo
              </motion.a>

              <motion.a
                href="https://github.com/nathanmdj/dinemate-fe"
                target="_blank"
                rel="noreferrer"
                className="font-inter-tight font-normal text-[1.125rem] mt-[0.5em] "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                  },
                }}
              >
                💻 GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

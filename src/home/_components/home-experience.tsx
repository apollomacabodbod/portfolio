import welaSchoolSystem from "src/assets/wela-school-system.jpg";
import codebilityLogo from "src/assets/codebility-logo.jpg";
import { motion } from "framer-motion";

export default function HomeExperience() {
  return (
    <>
      <div className="flex flex-col mt-[4.5em]">
        <motion.p
          className="text-[#030712] font-inter-tight text-[3rem] not-italic font-semibold leading-[1em]  transition-all duration-1000 ease-in-out "
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
          Experience
        </motion.p>

        <div className="sm:flex sm:items-start mt-[3.125em] gap-[1.5em] ">
          <motion.img
            src={welaSchoolSystem}
            alt=""
            className="w-full sm:w-[11.25em] object-cover rounded-[0.3125em] transition-all duration-1000 ease-in-out "
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
          <div className="flex flex-col   mt-[3.125em] sm:mt-[0em]">
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
              Web Developer
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
              Wela School Systems • Full Time
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
              Feb 2025 - Jun 2025 • 5 months{" "}
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
              Cagayan De Oro City, Northern Mindanao, Philippines • On-site
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
              • Developed and maintained scalable web applications using
              SvelteKit, ensuring smooth performance and modern user experience.
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
              • Collaborated with the QA team and the Project Manager to review
              features, clarify requirements, test functionality, and resolve
              reported issues.
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
              • Maintained the responsiveness of the web application to ensure a
              consistent user experience across devices and browsers.
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out  "
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
              • Debugged and fixed application issues, improving overall
              stability and user experience.
            </motion.p>
          </div>
        </div>

        <div className="sm:flex sm:items-start mt-[3.125em] gap-[1.5em] ">
          <motion.img
            src={codebilityLogo}
            alt=""
            className="w-full sm:w-[11.25em] object-cover rounded-[0.3125em] transition-all duration-1000 ease-in-out "
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
          <div className="flex flex-col   mt-[3.125em] sm:mt-[0em]">
            <motion.p
              className="text-[#030712] font-inter-tight text-[1.375rem] font-semibold transition-all duration-1000 ease-in-out"
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
              Frontend Developer
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              Codebility • Internship
            </motion.p>

            <motion.p
              className="text-[#6B7280] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              April 2025 - Feb 2025 • 11 months{" "}
            </motion.p>

            <motion.p
              className="text-[#6B7280] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              Philippines • Remote
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] mt-[0.5em] transition-all duration-1000 ease-in-out"
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
              • Converted Figma designs into responsive web applications
              ensuring compatibility across different devices and browsers using
              HTML5, Tailwind CSS, Next.js and Typescript.
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              • Implemented Server-Side Rendering (SSR) for dynamic data-driven
              pages using Next.js
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              • Using Git and Github to collaborated with team members through
              pull requests and consistent commit practices to maintain a clean
              and organized codebase.
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              • Integrated Storybook.js to create reusable and maintainable UI
              components in isolation to improve the development workflow with
              Next.js.
            </motion.p>

            <motion.p
              className="text-[#374151] font-inter-tight font-normal text-[1.125rem] transition-all duration-1000 ease-in-out"
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
              • Worked in Collaboration in Agile approach.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

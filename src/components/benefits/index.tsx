import { SelectedPage, BenefitType } from "@/utils/types";
import { motion } from "framer-motion";
import HText from "@/utils/HText";
import Benefit from "./Benefit";
import {
  AcademicCapIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import ActionButton from "@/utils/ActionButton";
import BenefitsPageGraphic from "@/assets/benefits-page-graphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Cardiovascular area, function fitness area, free weights, stretching and mobility area and personal training.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "We host over 240 fitness classes every week with various early morning and evening sessions available, so you’re sure to find the right class for you.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert trainers",
    description:
      "All personal trainers are fully-accredited and dedicated to your self-improvement. They will help you meet your goals faster, and provide you with the knowledge and confidence to work out on your own.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>More than just a gym</HText>
          <p className="my-5 text-sm">
            We're here for everyday people, to become strong individuals. We
            provide world class fitness equipment, trainers and classes to help
            you find and reach your fitness goals. We put true care into all of
            our members and are here to support you every step of the way.
          </p>
        </motion.div>

        {/* benefits */}
        <motion.div
          className="justify-betweengap-8 mt-5 items-center md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto" />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before: before:content-flowers absolute before:-left-20 before:-top-20 before:z-[1]">
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                <HText>
                  Millions of happy members getting{" "}
                  <span className="text-payne-grey"></span>
                </HText>
                </motion.div>
              </div>
            </div>
          {/* description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </motion.div>
          {/* button */}
          <div className="relative mt-16">
            <div className="before:content-leaves before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

import React from "react";
import faq from "../../assets/faq.jpg";

const FAQ = () => {
  return (
    <div>
      <h2
        className="text-center text-3xl mt-24 font-semibold"
        data-aos="zoom-out"
        data-aos-anchor-placement="top-bottom"
      >
        Frequently Ask{" "}
        <span className="text-pink-500 underline underline-offset-4">
          Question
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto py-16 gap-6">
        <div className="space-y-3 lg:space-y-8" data-aos="fade-right">
          <h3 className="text-3xl lg:text-4xl font-bold font-mono pt-5">Quick Answer</h3>
          {/* Question 01 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border-base-300 border"
            >
              <div className="collapse-title font-semibold text-lg">
                How often should I take my pet to the vet?
              </div>
              <div className="collapse-content text-base text-gray-500">
                For most pets, a yearly checkup is recommended to monitor their
                overall health, update vaccinations, and catch early signs of
                illness. Senior pets or those with chronic conditions may
                require more frequent visits.
              </div>
            </div>
          </div>
          {/* Question 02 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border-base-300 border"
            >
              <div className="collapse-title font-semibold text-lg">
                How can I book an appointment for emergency treatment?
              </div>
              <div className="collapse-content text-base text-gray-500">
                A yearly checkup is advised for the majority of pets in order to
                keep an eye on their general health, renew immunizations, and
                identify any early symptoms of sickness. More frequent visits
                could be necessary for elderly or chronically ill pets.
              </div>
            </div>
          </div>
          {/* Question 03 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border-base-300 border"
            >
              <div className="collapse-title font-semibold text-lg">
                How often should I bathe my pet?
              </div>
              <div className="collapse-content text-base text-gray-500">
                A yearly examination is advised for the majority of pets in
                order to keep an eye on their general health, renew
                immunizations, and identify any early symptoms of sickness. More
                frequent visits may be necessary for elderly pets or those with
                long-term health issues.
              </div>
            </div>
          </div>
          {/* Question 04 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border-base-300 border"
            >
              <div className="collapse-title font-semibold text-lg">
                What should I do if my pet eats something toxic?
              </div>
              <div className="collapse-content text-base text-gray-500">
                An regular exam is advised for the majority of pets in order to
                keep an eye on their general health, update their immunizations,
                and identify any early symptoms of sickness. Pets with chronic
                diseases or those who are elderly may need more regular visits.
              </div>
            </div>
          </div>
          {/* Question 05 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border-base-300 border"
            >
              <div className="collapse-title font-semibold text-lg">
                Is it normal for pets to be anxious or fearful?
              </div>
              <div className="collapse-content text-base text-gray-500">
                This year checkup is necessary for the majority of pets in order
                to keep an eye on their general health, renew immunizations, and
                identify any early symptoms of sickness. More frequent visits
                could be necessary for elderly or chronically ill pets.
              </div>
            </div>
          </div>
        </div>

        {/* Faq image */}
        <div data-aos="fade-left" className="mt-4 md:mt-16 lg:mt-0">
          <img src={faq} alt="" className="rounded-2xl w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

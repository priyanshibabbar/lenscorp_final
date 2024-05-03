import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Vision = () => {
  return (
    <div className="flex flex-col justify-center quicksand font-medium pt-8 w-full h-full bg-black">
      <h2 className="text-[4rem] text-center text-white">Vision</h2>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#000",
              border:"none",
              borderRadius:"15px"
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", height:"40px", width:"40px", alignItems:"center" }}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold pb-2">
              Diversity & Fairness
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#000",
              border:"none",
              borderRadius:"15px"
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            iconStyle={{ background: "rgb(23, 120, 00)", color: "#fff", height:"40px", width:"40px" }}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold pb-2">
              Regulatory Compliance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#000",
              border:"none",
              borderRadius:"15px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            iconStyle={{ background: "rgb(133, 1, 203)", color: "#fff", height:"40px", width:"40px" }}
          >
            <h3 className="vertical-timeline-element-title text-xl font-semibold pb-2">Code of Ethics</h3>
            <h4 className="vertical-timeline-element-subtitle">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Vision;

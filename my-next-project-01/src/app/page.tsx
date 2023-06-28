// import Image from "next/image";
import { Features } from "./components";
import { FaCriticalRole } from "react-icons/fa";

const consultingData = {
  rightSide: true,
  title: "Cunsulting",
  icon: <FaCriticalRole />,
  data: [
    {
      spanEl: "Expertise",
      text: "Consulting firms bring in-depth knowledge and expertise in specific industries, sectors, or functional areas.",
    },
    {
      spanEl: "Problem-solving",
      text: "Consulting companies to excel in problem-solving.",
    },
    {
      spanEl: "Objective viewpoint",
      text: "External and unbiased perspective on the client's business.",
    },
    {
      spanEl: "Customized solutions",
      text: "Understanding your unique requirements.",
    },
    {
      spanEl: "Data-driven approach",
      text: "Consulting companies rely on data analysis and evidence-based insights to support their recommendations.",
    },
    {
      spanEl: "Project management",
      text: "Consulting firms in project management.",
    },
    {
      spanEl: "Change management",
      text: "Understand the importance of change management.",
    },
    {
      spanEl: "Continuous learning",
      text: "Prioritizing continuous learning and staying up-to-date with industry trends, emerging technologies, and best practices.",
    },
  ],
};
const consultingData2 = {
  rightSide: false,
  title: "Planing",
  data: [
    {
      spanEl: "Strategic Planning",
      text: "Assessing the internal and external environment, setting goals, identifying competitive advantages, and developing strategies to achieve sustainable growth and success.",
    },
    {
      spanEl: "Business Plan Development",
      text: "Includes a detailed analysis of the market, target audience, competition, financial projections, and operational plans.",
    },
    {
      spanEl: "Financial Planning",
      text: "managing and optimizing the company's financial resources. ",
    },
    {
      spanEl: "Resource Planning",
      text: "Assessing current and future needs, optimizing resource utilization, and identifying potential gaps or inefficiencies. ",
    },
    {
      spanEl: "Operational Planning",
      text: "Setting operational objectives, defining key performance indicators (KPIs), designing workflows, and establishing metrics for monitoring and evaluating performance. ",
    },
    {
      spanEl: "Risk Management Planning",
      text: "Identifying potential risks, assessing their impact and likelihood, and developing strategies to mitigate or respond to them. ",
    },
    {
      spanEl: "Succession Planning",
      text: "Identifying key positions, assessing talent within the organization, and developing plans for leadership succession.",
    },
    {
      spanEl: "Monitoring and Evaluation",
      text: "Tracking key metrics, analyzing performance data, and conducting regular reviews to assess the effectiveness of the implemented plans. ",
    },
  ],
};
const consultingData3 = {
  rightSide: true,
  title: "Risk management",
  data: [
    {
      spanEl: "Risk Identification",
      text: "Systematically analyzing internal and external factors that may pose threats or create uncertainties. ",
    },
    {
      spanEl: "Risk Assessment",
      text: "Evaluating the severity of each risk and its potential consequences on the company's finances, operations, reputation, and overall business continuity.",
    },
    {
      spanEl: "Risk Mitigation",
      text: "Implementing internal controls, improving security measures, diversifying investments, developing contingency plans, or implementing safety protocols.  ",
    },
  ],
};

export default function Home() {
  return (
    <main className="max-w-6xl  flex flex-col items-center justify-between mx-auto md:mt-24 mb-12  ">
      <div>Hero</div>
      <div className="bg-gray-100 p-10">
        <Features {...consultingData} />
        <Features {...consultingData2} />
        <Features {...consultingData3} />
      </div>
    </main>
  );
}

//   flex flex-col bg-gray-100 mx-auto px-24

// flex min-h-screen flex-col items-center justify-between p-24

{
  /* <div>Planing</div>
<div>Risk management</div> */
  // mt-[100px] md:mt-16
}

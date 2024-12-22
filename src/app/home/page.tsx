import { useNavigate } from "react-router-dom";
import data from "../../data";

const dataAddition = [
  {
    title: "Workbooks",
    description:
      "for each lesson where you can apply what you learn to interesting and useful exercises",
  },
  {
    title: "Mobile App",
    description:
      "with various ways to quiz yourself on the vocabulary and sentences introduced",
  },
  {
    title: "Audio files",
    description: "for every word and sentence in Korean",
  },
  {
    title: "Hanja Lessons",
    description: "to help you understand the root-meanings of words",
  },
  {
    title: "Short Stories",
    description: "to increase your reading skills",
  },
  {
    title: "Simple Lists",
    description: "of vocabulary in case you want to organize things your way",
  },
  {
    title: "Anki Packages",
    description: "so you can make digital practice cards at home",
  },
  {
    title: "Vocabulary Lists",
    description:
      "to help you understand how each word can be used (completed to Lesson 100)",
  },
  {
    title: "Conjugate buttons",
    description:
      "that you can press to see how every verb and adjective is conjugated (completed to Lesson 75)",
  },
  {
    title: "Paperback and Kindle",
    description: "versions of our lessons",
  },
  {
    title: "Theme Lessons",
    description: "dedicated to a specific subject",
  },
];

const dataSocial = [
  {
    title: "YouTube",
    link: "",
  },
  {
    title: "Patreon",
    link: "",
  },
  {
    title: "Facebook",
    link: "",
  },
  {
    title: "Twitter",
    link: "",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fafafa]">
      <p className="px-[20px] md:px[5%] xl:px-[10%] text-[24px] py-[30px]">
        Welcome to How to Study Korean!
      </p>
      <div className="bg-white border-t-[1px] pt-[30px] px-[20px] md:px[5%] xl:px-[10%]">
        <p className="leading-7">
          The purpose of this website is to provide Korean learners with a
          one-stop resource for learning Korean. We strive to provide the most
          detailed, accurate and clear explanations at every step of the way –
          from learning how to read all the way to advanced grammar. Our lessons
          will always be free and are chuck-full of content. You wouldn’t
          believe how much is in there. As a base, each lesson includes:
        </p>
        <ol className="list-decimal list-inside mt-[30px] space-y-3">
          <li>Twenty to thirty vocabulary words.</li>
          <li>
            Grammar tailored to the specific level of study applying the
            vocabulary from that lesson.
          </li>
          <li>Audio recordings of every Korean word and sentence.</li>
        </ol>

        <p className="leading-7 mt-[30px]">
          Our Lessons are separated into Units, each with 25 Lessons, 3 Quizzes
          and a Unit Test. We currently have the following Units
        </p>

        <ul className="list-disc list-inside mt-[30px] space-y-3">
          {data.map((item, index) => (
            <li
              key={index}
              className="text-[#c1321d] hover:text-black marker:text-black cursor-pointer"
              onClick={()=>navigate(`/unit/${item?.name?.replace(" ","")}`)}
            >
              {item.name}: {item.description}
            </li>
          ))}
        </ul>

        <p className="leading-7 mt-[30px]">
          In addition to the lessons, we also have additional material that you
          can use to supplement your learning.
        </p>

        <ul className="mt-[30px] space-y-3">
          {dataAddition.map((item, index) => (
            <li key={index} className="flex relative pl-4 items-center">
              {/* Dấu chấm tròn giả lập */}
              <span className="w-[5px] h-[5px] mr-4 bg-black rounded-full"></span>

              {/* Nội dung chính */}
              <span className="text-[#c1321d] hover:text-black">
                {item.title}:
              </span>
              <text className="text-black ml-2">{item.description}</text>
            </li>
          ))}
        </ul>

        <p className="leading-7 mt-[30px]">
          You can follow us on the following social networking platforms:
        </p>

        <ul className="list-disc list-inside mt-[30px] space-y-3">
          {dataSocial.map((item, index) => (
            <li
              key={index}
              className="text-[#c1321d] hover:text-black marker:text-black"
            >
              {item.title}
            </li>
          ))}
        </ul>

        <p className="leading-7 mt-[30px]">
          Want to know more? Check our <span className="text-[#c1321d]">About Us</span> Page
        </p>
      </div>
    </div>
  );
}

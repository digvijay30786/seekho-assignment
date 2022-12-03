import { Card } from "antd";
import React, { useEffect, useState } from "react";

/*import css file in a component*/
import "./home.scss";
const question = [
  {
    ques: "Tripitakas are sacred books of",
    option: ["Buddhists", "Hindus", "Jains", "None of the above"],
    answer: 0,
  },
  {
    ques: "Patanjali is well known for the compilation of –",
    option: ["Yoga Sutra", "Panchatantra", "Brahma Sutra", "Ayurveda"],
    answer: 3,
  },
  {
    ques: "what is the React",
    option: ["Library", "Framwork", "language", "nothing"],
    answer: 0,
  },
  {
    ques: "What is the Test Library",
    option: ["Hubstuff", "Disney", "Jest", "Coffe"],
    answer: 2,
  },
  {
    ques: "Who is invented React",
    option: ["Google", "Facebook", "Yahoo", "Mugal"],
    answer: 2,
  },
];

const Home = () => {
  const [question, setQuestion] = useState([
    {
      s_number: 1,
      ques: "Tripitakas are sacred books of",
      option: ["Buddhists", "Hindus", "Jains", "None of the above"],
      answer: 0,
      time: 1,
      trackTime: 1,
      selected: "",
    },
    {
      s_number: 2,
      ques: "Patanjali is well known for the compilation of –",
      option: ["Yoga Sutra", "Panchatantra", "Brahma Sutra", "Ayurveda"],
      answer: 3,
      time: 2,
      trackTime: 2,
      selected: "",
    },
    {
      s_number: 3,
      ques: "what is the React",
      option: ["Library", "Framwork", "language", "nothing"],
      answer: 0,
      time: 1,
      trackTime: 1,
      selected: "",
    },
    {
      s_number: 4,
      ques: "What is the Test Library",
      option: ["Hubstuff", "Disney", "Jest", "Coffe"],
      answer: 2,
      time: 1,
      trackTime: 1,
      selected: "",
    },
    {
      s_number: 5,
      ques: "Who is invented React",
      option: ["Google", "Facebook", "Yahoo", "Mugal"],
      answer: 1,
      time: 1,
      trackTime: 1,
      selected: "",
    },
  ]);
  const [formate] = useState({ 0: "A", 1: "B", 2: "C", 3: "D" });
  const [current, setCurrent] = useState(0);
  const [resultView, setResultView] = useState(false);
  const [timeLog, setTimeLog] = useState({});
  const [timerStart, setTimerStart] = useState(59);
  const [questionCount, setQuestionCount] = useState(question.length);
  const handleRightClick = () => {
    setCurrent((pre) => pre + 1);
  };
  const handleleftClick = () => {
    setCurrent((pre) => pre - 1);
  };
  const handleResult = () => {
    const a = question.filter((item) => item.update);
    setResultView(true);
  };

  const handleSelected = (param) => {
    setQuestion((pre) => {
      pre[current].selected = param;
      pre[current].update = pre[current].answer == param ? true : false;
      return [...pre];
    });
  };
  return (
    <div className="container">
      <div className="side-card">
        {question.map((item) => {
          if (item.selected || item.selected === 0) {
            return (
              <div
                className={`average ${
                  resultView ? (item.update ? "green" : "red") : ""
                }`}
              >
                <div style={{ background: "transparent" }}>
                  Question : {item.s_number}
                </div>
                <div style={{ background: "transparent" }}>
                  Ans:{formate[item.selected]}
                </div>
              </div>
            );
          }
          return;
        })}
      </div>
      {!resultView && (
        <div className="card">
          <div className="question">
            <div>
              {`Q:${current + 1}`} {question[current].ques}
            </div>
          </div>
          <div className="answer">
            {question[current]?.option?.map((item, index) => {
              return (
                <div
                  className={`options ${
                    question[current]?.selected === index ? "selected" : ""
                  }`}
                  onClick={() => handleSelected(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="bottom">
            <div>
              {current > 0 && (
                <button className="left" onClick={handleleftClick}>
                  left
                </button>
              )}
              {current < questionCount - 1 &&
                (question[current]?.selected != "" ||
                  question[current]?.selected === 0) && (
                  <button className="right" onClick={handleRightClick}>
                    right
                  </button>
                )}
              {current === questionCount - 1 && (
                <button className="right" onClick={handleResult}>
                  View Result
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {resultView && (
        <div className="card">
          <div className="result">
            <div className="title">Congratulations</div>
            <div className="score">
              Your Score : {question.filter((item) => item.update)?.length}/
              {questionCount}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

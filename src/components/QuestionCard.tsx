import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => (
  <div>
    <p>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p>
      {userAnswer}
      {question}
      {answer}
      {callback}
    </p>
  </div>
);

export default QuestionCard;

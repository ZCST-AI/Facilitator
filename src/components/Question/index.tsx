import { type Question as QuestionType } from "../../libraries/completions/questions";

export const Question = (question: QuestionType) => {
    switch (question.type) {
        case "choice-single":
        case "choice-multiple":
        case "free-literature":
        case "free-math":
        case "fill":
        case "match":
        case "order":
        case "complex":
        default:
            return <div>Unknown question type: {question.type}</div>;
    }
};

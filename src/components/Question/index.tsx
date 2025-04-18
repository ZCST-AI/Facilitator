import { type Question as QuestionType } from "../../libraries/completions/questions";

export const Question = (question: QuestionType) => {
    switch (question.type) {
        case "choice-single":
        case "fill":
        case "choice-multiple":
        case "match":
        case "order":
        case "free-literature":
        case "free-math":
        case "complex":
        default:
            return <div>Unknown question type: {question.type}</div>;
    }
};

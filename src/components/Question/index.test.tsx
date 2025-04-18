import { QuestionBase } from "./kinds/QuestionBase";
import { Choice } from "./kinds/Choice";

const tests = {
    capitalOfFrance: {
        type: "choice-single" as const,
        information: {
            difficulty: 1,
            score: 1,
            stem: "What is the capital of France?",
        },
        options: [
            { symbol: "A", content: "London" },
            { symbol: "B", content: "Paris" },
            { symbol: "C", content: "Berlin" },
        ],
        correctAnswer: {
            explanationShort: "Paris is the capital.",
            explanationLong: "Paris is the capital and largest city of France.",
            content: 1,
        },
        studentAnswer: {
            score: 1,
            content: 1,
        },
    },
};

export default {
    base: <QuestionBase question={tests.capitalOfFrance}></QuestionBase>,
    choice: <Choice {...tests.capitalOfFrance}></Choice>,
};

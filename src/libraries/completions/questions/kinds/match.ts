import { string, tuple, array } from "zod";
import { QuestionBase, PositiveInt } from "./base";

// Define the type for the correct answer content: an array of [index_A, index_B] tuples
const CorrectAnswerContent = array(tuple([PositiveInt, PositiveInt])).min(1);

// Use QuestionBase function and extend for specific fields
export const Match = QuestionBase(
    "match",
    CorrectAnswerContent.describe("The correct pairings, represented as [index_A, index_B] tuples."),
)
    .extend({
        stem: string().min(1).describe("The introductory text for the matching task."),
        parts: tuple([array(string().min(1)).min(1), array(string().min(1)).min(1)]).describe(
            "Two lists of items to be matched (e.g., [premises, conclusions]).",
        ),
        studentAnswer: array(tuple([PositiveInt, PositiveInt]))
            .nullable()
            .describe("The pairings submitted by the student (null if unanswered)."),
    })
    .describe("A matching question where items from list A must be paired with items from list B.");

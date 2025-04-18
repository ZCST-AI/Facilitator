import { string, array } from "zod";
import { QuestionBase, PositiveInt } from "./base";

// Use QuestionBase function and extend for specific fields
export const Order = QuestionBase(
    "order",
    array(PositiveInt)
        .min(1)
        .describe(
            "The indices representing the correct sequence (e.g., [1, 0, 2] means item 1 first, item 0 second, item 2 third).",
        ),
)
    .extend({
        items: array(string().min(1))
            .min(2)
            .describe("The list of items that need to be placed in the correct sequence."),
    })
    .describe("An ordering question where items must be arranged in a specific sequence.");

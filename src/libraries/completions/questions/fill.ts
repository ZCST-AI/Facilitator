import { string, array } from "zod";
import { QuestionBase } from "./base";

export const Fill = QuestionBase(
    "fill",
    array(string().min(1)).min(1).describe("The acceptable answer(s) for the blank."),
).describe("A fill-in-the-blank question.");

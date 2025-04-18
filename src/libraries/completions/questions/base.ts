import { literal, number, object, string, ZodType } from "zod";

export const AnswerWithDetails = <T extends ZodType<any>>(content: T) =>
    object({
        content,
        explanationShort: string()
            .min(1)
            .describe("A context-independent, highly targeted, concise explanation of the answer."),
        explanationLong: string()
            .min(1)
            .optional()
            .describe(
                "An optional, more detailed explanation for deeper understanding, potentially including context or background information.",
            ),
    });

export const QuestionBase = <T extends string, C extends ZodType<any>>(type: T, content: C) =>
    object({
        type: literal(type),
        information: object({
            difficulty: number().int().min(1).max(5).describe("The difficulty of the question, from 1 to 5."),
            score: number().describe("The maximum possible score for this question."),
            stem: string().min(1).describe("The main text or question being asked."),
        }),
        correctAnswer: AnswerWithDetails(content),
        studentAnswer: object({
            content,
            score: number().nullable().describe("The score awarded to the student's answer."),
        }),
    });

export const PositiveInt = number().int().nonnegative();

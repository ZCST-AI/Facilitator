import { array, union, z } from "zod";
import { ChoiceSingle, ChoiceMultiple, Choice } from "./kinds/choice";
import { Fill } from "./kinds/fill";
import { FreeLiterature, FreeMath, Free } from "./kinds/free";
import { Match } from "./kinds/match";
import { Order } from "./kinds/order";
import { QuestionBase } from "./kinds/base";

const Simple = union([Choice, Fill, Match, Order, Free]);

const Complex = QuestionBase("complex", array(Simple).min(1))
    .extend({
        children: array(Simple).min(1).describe("The list of sub-questions nested within this complex question."),
    })
    .describe("A complex question composed of multiple sub-questions.");

export const Question = union([Simple, Complex]);

export { ChoiceSingle, ChoiceMultiple, Choice, Fill, Match, Order, FreeLiterature, FreeMath, Free, Simple, Complex };

export type Choice = z.infer<typeof Choice>;
export type ChoiceSingle = z.infer<typeof ChoiceSingle>;
export type ChoiceMultiple = z.infer<typeof ChoiceMultiple>;
export type Fill = z.infer<typeof Fill>;
export type Match = z.infer<typeof Match>;
export type Order = z.infer<typeof Order>;
export type Free = z.infer<typeof Free>;
export type FreeLiterature = z.infer<typeof FreeLiterature>;
export type FreeMath = z.infer<typeof FreeMath>;
export type Simple = z.infer<typeof Simple>;
export type Complex = z.infer<typeof Complex>;
export type Question = z.infer<typeof Question>;

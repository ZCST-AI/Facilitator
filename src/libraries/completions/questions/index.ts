import { array, union, z } from "zod";
import { ChoiceSingle, ChoiceMultiple, Choice } from "./choice";
import { Fill } from "./fill";
import { FreeLiterature, FreeMath, Free } from "./free";
import { Match } from "./match";
import { Order } from "./order";
import { QuestionBase } from "./base";

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

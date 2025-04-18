import { ComponentChildren } from "preact";
import { type Question as QuestionType } from "../../../libraries/completions/questions";

export const QuestionBase = ({ question, children }: { question: QuestionType; children?: ComponentChildren }) => {
    const { information } = question;

    return (
        <div>
            <h1 class="text-center">{information.stem}</h1>
            {children}
        </div>
    );
};

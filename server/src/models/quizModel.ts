import { Schema, model } from "dynamoose";

const quizSchema = new Schema(
    {
        quizId: {
            type: String,
            hashKey: true,
            required: true,
        },
        chapterId: {
            type: String,
            required: true,
            index: {
                name: "ChapterQuizIndex",
                type: "global",
            },
        },
        questions: {
            type: Array,
            schema: [
                {
                    questionId: String,
                    questionText: String,
                    questionType: {
                        type: String,
                        enum: ["Multiple Choice", "Short Answer", "File Upload"],
                        required: true,
                    },
                    options: { type: Array, schema: [{ type: String }] }, // For multiple choice
                    correctAnswer: { type: String },
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

const Quiz = model("Quiz", quizSchema);
export default Quiz;

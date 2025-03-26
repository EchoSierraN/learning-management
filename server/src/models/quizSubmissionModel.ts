import { Schema, model } from "dynamoose";

const quizSubmissionSchema = new Schema(
    {
        submissionId: {
            type: String,
            hashKey: true,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        quizId: {
            type: String,
            required: true,
        },
        courseId: {
            type: String,
            required: true,
        },
        answers: {
            type: Array,
            schema: [
                {
                    questionId: String,
                    selectedAnswer: String,
                },
            ],
        },
        score: {
            type: Number,
            required: true,
        },
        timestamp: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const QuizSubmission = model("QuizSubmission", quizSubmissionSchema);
export default QuizSubmission;

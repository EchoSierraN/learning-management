import { Schema, model } from "dynamoose";

// Parent-Student Relationship Schema
const parentStudentSchema = new Schema(
    {
        parentId: {
            type: String, // Clerk User ID of the parent
            hashKey: true,
            required: true,
        },
        students: {
            type: Array,
            schema: [
                {
                    studentId: {
                        type: String, // Clerk User ID of the student
                        required: true,
                    },
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

const ParentStudent = model("ParentStudent", parentStudentSchema);
export default ParentStudent;

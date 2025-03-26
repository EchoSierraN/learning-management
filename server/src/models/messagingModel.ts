import { Schema, model } from "dynamoose";

const messageSchema = new Schema(
    {
        messageId: {
            type: String,
            hashKey: true,
            required: true,
        },
        senderId: {
            type: String,
            required: true,
        },
        receiverId: {
            type: String,
            required: true,
        },
        text: {
            type: String,
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

const Message = model("Message", messageSchema);
export default Message;

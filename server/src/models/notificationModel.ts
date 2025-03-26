import { Schema, model } from "dynamoose";

const notificationSchema = new Schema(
    {
        notificationId: {
            type: String,
            hashKey: true,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        read: {
            type: Boolean,
            default: false,
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

const Notification = model("Notification", notificationSchema);
export default Notification;

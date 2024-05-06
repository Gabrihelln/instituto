import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId, ref: "Users"
    },
    post: {
        type: Schema.Types.ObjectId, ref: "Posts"
    },
    desc: {
        type: String
    },
}, {timestamps: true})

const Comments = models.model("Comments", commentSchema)

export default Comments;
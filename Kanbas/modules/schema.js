import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
      required: true,
    },
    lessons: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        module: {
          type: String,
        },
      },
    ],
  },
  { collection: "modules" },
);

export default moduleSchema;

import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      unique: true,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    photoUrl: {
      type: String,
      default: null,
    },

    location: {
      latitude: {
        type: Number,
        required: true,
      },

      longitude: {
        type: Number,
        required: true,
      },
    },

    status: {
      type: String,
      default: "Reported",
    },

    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    assignedTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
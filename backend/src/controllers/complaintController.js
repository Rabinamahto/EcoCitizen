import Complaint from "../models/Complaint.js";

export const createComplaint = async (req, res) => {
  const { category, description, latitude, longitude } = req.body;

  if (!category || !description || latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      success: false,
      message: "Category, description and location are required",
    });
  }

  try {
    const complaint = new Complaint({
      complaintId: `EC-${Date.now()}`,
      category,
      description,
      location: {
        latitude,
        longitude,
      },
      status: "Reported",
    });

    await complaint.save();

    res.status(201).json({
      success: true,
      message: "Complaint received successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save complaint",
      error: error.message,
    });
  }
};
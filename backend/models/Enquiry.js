import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    // Visitor Details
    visitorName: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Mobile number must be exactly 10 digits'
        }
    },
    date: {
        type: Date,
        required: true
    },

    // Personal Details
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Mobile number must be exactly 10 digits'
        }
    },

    // Course Details - Multiple selection
    course: {
        type: [String],
        required: true,
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'At least one course must be selected'
        }
    },

    // Academic Details
    score: {
        type: String,
        trim: true
    },

    // State Preference - Max 4 selections
    statePreference: {
        type: [String],
        validate: {
            validator: function (v) {
                return !v || v.length <= 4;
            },
            message: 'Maximum 4 state preferences allowed'
        }
    },

    // Address Details
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    referenceName: {
        type: String,
        required: true,
        trim: true
    },

    // Status
    status: {
        type: String,
        enum: ["interested", "not_interested"],
        default: "interested",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;

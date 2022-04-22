const mongoose = require("mongoose");

var Admin = new mongoose.Schema({
    UID: {
        type: String,
        unique: true,
        required: [true, "Must Enter User ID"],
        index: true
    },
    UName: {
        type: String
    },
    UEmail: {
        type: String,
        unique: true,
        required: [true, "Must Enter uniqe email"],
        index: true
    },
    UPhone: {
        type: String
    },
    UPass: {
        type: String
    },
    UStatus: {
        type: String,
        enum: ["Active", "UnActive"],
        required: [true, "Select Active or UnActive"],
        default: "Active"
    },
    Address: {
        HouseNo: {
            type: String,
            default: ""
        },
        StreetNo: {
            type: String,
            default: ""
        },
        City: {
            type: String,
            default: ""
        },
        State: {
            type: String,
            default: ""
        },
        Pin: {
            type: Number,
            default: ""
        },
        Contry: {
            type: String,
            default: ""
        },
        NearBy: {
            type: String,
            default: ""
        },
    },
    A_added_data: {
        type: Date,
        default: Date.now
    }
});

module.exports = Admin = mongoose.model("Admin", Admin);
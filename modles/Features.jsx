const { Schema, default: mongoose } = require("mongoose");

const FeaturesSchema = new Schema(
    {
        title: String,
        des: String,
        icon: String
    },
    {
        timestamps: true
    }
)
const Features = mongoose.models.Features || mongoose.model("Features", FeaturesSchema)
export default Features
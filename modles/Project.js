const { Schema, models, model, default: mongoose } = require("mongoose");

const ProjectSchema = new Schema({
    title:String,
    image: String,
    des: String,
    site: String,
    client:String,
    server: String
},
{
    timestamps:true
}
)
const Projects = mongoose.models.Projects || mongoose.model("Projects",ProjectSchema)
export default Projects
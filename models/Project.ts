import mongoose, {Schema, model, Model} from 'mongoose';
import { IProject } from '@/interfaces';

const projectSchema = new Schema<IProject>({
    description: [{
        lang: {type: String, enum: ['es', 'en'], required: true},
        value: {type: String, required: true}
    }],
    documentation: [{
        lang: {type: String, enum: ['es', 'en'], required: true},
        value: {type: String, required: true}
    }],
    github: { type: String },
    link: { type: String },
    logo: { type: String },
    slug: { type: String, required: true },
    available_languages: [{ type: String, enum: ['es', 'en'], required: true }],
    tag: [{
        lang: {type: String, enum: ['es', 'en'], required: true},
        value: {type: String, required: true}
    }],
    title: {type: String},
    category: { type: String, enum: ['production', 'personal', 'freelance'], required: true },
    dateFrom: { type: Date, required: true },
    dateTo: { type: Date },
    developers: [{
        name: { type: String, required: true },
        surname: { type: String, required: true },
        github: { type: String },
        linkedin: { type: String },
        portfoil: { type: String },
    }],
    status: { type: String, enum: ['investigation', 'planification', 'designing', 'developing', 'launching', 'maintenance', 'tracking', 'finished'], required: true },
},{
    timestamps: true
});

projectSchema.index({title: 'text', category: 'text', status: 'text', tag: 'text'})

const Project: Model<IProject> = mongoose.models.Project || model('Project', projectSchema);

export default Project;
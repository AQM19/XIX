import mongoose, {Schema, model, Model} from 'mongoose';
import { IDeveloper } from '@/interfaces';

const developerSchema = new Schema<IDeveloper>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    github: { type: String },
    linkedin: { type: String },
    portfoil: { type: String },
});

developerSchema.index({name: 'text', surname: 'text'});

const Developer: Model<IDeveloper> = mongoose.models.Developer || model('Developer', developerSchema);

export default Developer;
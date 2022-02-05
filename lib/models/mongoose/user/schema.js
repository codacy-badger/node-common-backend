import mongoose from 'mongoose';

import { name, definition, options, statics, methods, helpers } from './index.js';

const schema = new mongoose.Schema(definition, options);

Object.assign(schema.statics, statics);
Object.assign(schema.methods, methods);

schema.pre('save', helpers.overWritePassword);

export default { name, schema };

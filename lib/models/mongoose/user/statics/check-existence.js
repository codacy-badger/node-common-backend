import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

export default async function checkExistence(userId) {
    const user = await this.findOne({ _id: new ObjectId(userId) }).exec();
    return user !== null;
}

import { ObjectId } from "mongodb";
import { database } from "../config/connectdb";
import { hashSync } from "bcrypt";

export class User {
    static user() {
        return database.collection("user")
    }

    // GET
    static getUserByEmail(email) {
        return this.user().findOne({ email: email });
    }
    static getAllUser() {
        return this.user().find({}).toArray();
    }
    static getUserById(id) {
        id = ObjectId.createFromHexString(id)
        return this.user().findOne({ _id: id });
    }

    static getUserByUsername(username){
        return this.user().findOne({ username: username });
    }
    // POST / CREATE
    static addUser(paying) {
        paying.password = hashSync(paying.password,10)
        paying.createAt = new Date(Date.now())
        return this.user().insertOne(paying)
    }

    // PUT / UPDATE
    static updateUser(id, paying) {
        id = ObjectId.createFromHexString(id)
        return this.user().updateOne({ _id: id }, { $set: paying })
    }

    // DELETE
    static deleteUser(id) {
        id = ObjectId.createFromHexString(id)
        return this.user().deleteOne({ _id: id })
    }
}
import { ObjectId } from "mongodb";
import { database } from "../config/connectdb";
import { hashSync } from "bcrypt";

export class User {
    static user() {
        return database.collection("user")
    }

    // GET
    static getUserByEmail(email) {
        return this.user().find({ email: email }).toArray();
    }
    static getAllUser() {
        return this.user().find({}).toArray();
    }
    static getUserById(id) {
        id = ObjectId.createFromHexString(id)
        return this.user().find({ _id: id }).toArray();
    }
    static getUserByAuthor(author) {
        return this.user().find({ author: author }).toArray();
    }

    // POST / CREATE
    static addUser(paying) {
        return this.user().insertOne({
            ...paying,
            date: new Date(),
            password: hashSync(paying.password)
        })
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
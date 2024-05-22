import { ObjectId } from "mongodb";
import { database } from "../config/connectdb";

export class Content{
    // GET
    static content(){
        return database.collection("content")
    }
    static getAllContent(){
        return this.content().find({}).toArray();
    }
    static getContentById(id){
        id = ObjectId.createFromHexString(id)
        return this.content().find({_id:id}).toArray();
    }
    static getContentByAuthor(author){
        return this.content().find({author:author}).toArray();
    }

    // POST / CREATE
    static addContent(paying){
        return this.content().insertOne(paying)
    }
    
    // PUT / UPDATE
    static updateContent(id,paying){
        id = ObjectId.createFromHexString(id)
        return this.content().updateOne({_id:id},{$set:paying})
    }

    // DELETE
    static deleteContent(id){
        id = ObjectId.createFromHexString(id)
        return this.content().deleteOne({_id:id})
    }
}
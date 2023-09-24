import { MongoClient, ServerApiVersion } from "mongodb";
import 'server-only'

/**
 * @type {import("mongodb").Db}
 */
let db;
const DbConnect = async () => {
    if (db) return db
    try {
        const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.PASSWORD}@cluster0.x5paqdg.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db("easy-shop")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return db
    } catch (error) {
        console.log(error.massage);
    }
};

export default DbConnect;
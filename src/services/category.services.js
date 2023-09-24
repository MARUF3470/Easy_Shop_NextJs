import DbConnect from "./DbConnect"
import 'server-only'

export const getCategoriesFromDB = async () => {
    const db = await DbConnect()
    const categoriesCollection = db.collection('categories');
    const query = {}
    return categoriesCollection.find(query).toArray()
}
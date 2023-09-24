import { getCategoriesFromDB } from "@/services/category.services";
import { cache } from "react";
import 'server-only'

const getCategories = cache(() => {
    return getCategoriesFromDB()
})

export default getCategories;
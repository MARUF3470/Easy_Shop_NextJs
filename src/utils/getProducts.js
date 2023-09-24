import { getProductsFromDB } from "@/services/product.service";
import { cache } from "react";
import 'server-only'

const getProducts = cache(getProductsFromDB)

export default getProducts;
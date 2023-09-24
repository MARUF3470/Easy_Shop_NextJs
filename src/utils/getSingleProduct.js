import { getProductByIdFromDB } from "@/services/product.service";
import { cache } from "react";
import 'server-only'

const getSingleProduct = cache(getProductByIdFromDB)

export default getSingleProduct;
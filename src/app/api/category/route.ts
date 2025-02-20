import { createCategory, getCategory } from "./category.controller";


export async function POST (req:Request){

    return createCategory(req)

}

export async function GET (){
 return getCategory()
}
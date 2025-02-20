import dbConnect from "@/database/connection";
import Category from "@/database/models/category.schema";

export async function createCategory(req: Request) {
  try {
    await dbConnect();
    const { name, description } = await req.json();

    const existingCategory = await Category.findOne({ name: name });
    if (existingCategory) {
      return Response.json(
        {
          message: "Category already existed with that name!",
        },
        { status: 400 }
      );
    }

    await Category.create({
      name: name,
      description: description,
    });
    return Response.json(
      {
        message: "Category created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Something went wrong",
    },{status : 500});
  }
}

export async function getCategory(){
   try{
    dbConnect()
    const categories = await Category.find()  // find returns array , findOne return objects data , findById returns objects data

    if(categories.length === 0){
        return Response.json({
            message : 'No category found'
        }, {status : 404})
    }

    return Response.json({
        message : "Category fetched successfully ",
        data : categories
    }, {status : 200})

   }catch(error){
    console.log(error)
    return Response.json({
        message : "Something went wrong"
    })
   }
}
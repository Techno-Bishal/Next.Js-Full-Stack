//check if incoming user is logged is also  check if logged in
//check role admin or not

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@/database/models/user.schema";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const authMiddleware = async (req: Request) => {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== Role.Admin) {
    return Response.json(
      {
        messgae: "You dont have permission to perform this task😭",
      },
      { status: 401 }
    );
  }

  return NextResponse.next()

};

export default authMiddleware
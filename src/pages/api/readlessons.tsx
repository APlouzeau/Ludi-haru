import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function readLessons(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const getLessons = await prisma.lesson.findMany();
      res.status(200).json(getLessons);
      console.log(getLessons);
    } catch (error) {}
  }
}

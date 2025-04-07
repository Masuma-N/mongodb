import clientPromise from "../../lib/mongodb";


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix"); // Replace with your real DB name

    const movies = await db.collection("movies").find({}).limit(5).toArray();

    return Response.json({ movies });
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

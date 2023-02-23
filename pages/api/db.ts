import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type Data = {
	name: any;
};

const db = async (req: NextApiRequest, res: NextApiResponse<any>) => {
	const url: any = process.env.NEXT_PUBLIC_MONGODB_URL;

	if (req.method === "POST") {
		const client = await MongoClient.connect(url);

		const database = client.db();

		const meetupCollection = database.collection("meetup");

		await meetupCollection.insertOne(req.body);

		client.close();

		res.status(200).json({ message: "Meetup Inserted!" });
	}

	if (req.method === "GET") {
		const client = await MongoClient.connect(url);

		const database: any = client.db();

		const allDoc = await database.collection.find();

		client.close();

		res.status(200).json({ data: allDoc, arr: allDoc.toArray() });
	}
};

export default db;

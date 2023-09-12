import mongoose from "mongoose";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URI!);
		const connection = mongoose.connection;
		connection.on("connected", () => {
			console.log("Connected to mongoDB");
		});
		connection.on("error", (err) => {
			console.log("Error connecting to mongoDB");
			process.exit(1);
		});
	} catch (e) {
		console.log("Something went wrong ");
		console.log(e);
	}
}

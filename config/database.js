import mongoose from "mongoose";

let url = process.env.URI_MONGO;
console.log(url);

// mongoose.connect(url).then(() => console.log("Database connected")).catch((err) => console.log(err));

async function conectiondatabase() {
    try {
        mongoose.connect(process.env.URI_MONGO)
        console.log("Database connected");

    } catch (e) {
        console.log(e);
    }
}
conectiondatabase()
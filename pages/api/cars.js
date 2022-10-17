import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), "public/api");
    const fileContents = await fs.readFile(jsonDirectory + '/cars.json', "utf-8");
    res.status(200).json(fileContents);
}
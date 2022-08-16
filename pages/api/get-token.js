import { promises as fs } from "fs";
import path from "path";
import collectionJson from "../../data/collection-payload.json"

export default (req, res) => {
  /**
   * your implementation goes here
   */
  // res.status(200).json({ name: "Hello, world!" });
  res.status(200).json(collectionJson);
};

import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

// DELETE OPERATIONS

const deleteDirectory = async (dirPath) => {
  try {
    fs.rmdirSync(dirPath, { recursive: true });
    console.log("Directory successfully deleted");
  } catch (error) {
    console.log("An error occurred: " + error);
  }
};

const deleteFile = async (filePath) => {
  try {
    await fsPromises.unlink(filePath);
    console.log("File successfully deleted");
  } catch (error) {
    console.log("An error occurred: " + error);
  }
};

const deleteAllFilesInDir = async (dirPath) => {
  try {
    fs.readdirSync(dirPath).forEach((file) => {
      fs.unlinkSync(path.join(dirPath, file));
    });
    console.log("All files in directory successfully deleted");
  } catch (error) {
    console.log("An error occurred: " + error);
  }
};

export { deleteDirectory, deleteFile, deleteAllFilesInDir };

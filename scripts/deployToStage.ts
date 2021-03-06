import addGitTag from "./builds/addGitTag";
import pushToS3 from "./builds/pushToS3";
import recordGitTag from "./builds/recordGitTag";

async function deployToStage() {
  const NEW_TAG: string = new Date().toISOString().replace(/:/g, "-");

  await addGitTag(NEW_TAG);
  await pushToS3(NEW_TAG);
  await recordGitTag(NEW_TAG);
  console.log("ALL TASKS ARE DONE!");
}

deployToStage();

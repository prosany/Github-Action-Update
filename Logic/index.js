const axios = require("axios");
const { getRandomMessage } = require("../Config/message");

module.exports = async (
  url,
  action,
  workflow_run,
  repository,
  sender,
  channelId,
  name,
  sampleURL
) => {
  let content =
    action === "completed" && workflow_run.conclusion === "success"
      ? `Hey, <@&${channelId}> Folks!\n${name} is successfully deployed. ✅\nHosted URL: ${sampleURL}\nRepository: ${
          repository.name
        }\nDeployed By: ${sender.login}\n\nThank you ${
          sender.login
        }! ${getRandomMessage()}`
      : action === "completed" && workflow_run.conclusion === "failure"
      ? `Hey, <@&${channelId}> Folks!\n${name} deployment is failed. ❌\nHosted URL: ${sampleURL}\nRepository: ${repository.name}\nDeployed By: ${sender.login}\n\nThank you ${sender.login}! Please try to fix the issue and deploy again.`
      : null;
  const response = await axios.post(content !== null ? url : null, {
    username: "Kalpas Pipeline",
    avatar_url: "https://i.ibb.co/sRnBYYK/kalpas.jpg",
    content,
  });
  return response;
};

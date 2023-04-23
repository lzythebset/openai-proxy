import handleRequest from "../../src/handle-request";

export const config = {
  runtime: "edge", // this is a pre-requisite
  // exclude hongkong cause it's not supported by OpenAI
  regions: [
    "cle1",
    "iad1",
    "pdx1",
    "sfo1",
  ],
};

export default handleRequest;

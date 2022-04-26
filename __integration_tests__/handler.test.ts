import axios from "axios";
import AWS from "aws-sdk";

const invokeUrl =
  "http://lambda:8080/2015-03-31/functions/function/invocations";

const event = {
  version: "0",
  id: "ce085273-ece2-ece2-0295-93200ba11af7",
  "detail-type": "CatalogEntityUpdated",
  source: "life.macai.customer",
  account: "629562368706",
  time: "2022-01-21T13:30:52Z",
  region: "eu-west-1",
  resources: [],
  detail: {
    product: {
      id: "123",
      expiring_date: "2023-12-11",
      product_expiration_type: "none",
      shelf_id: "shelf_123",
      shelf_name: "ABC",
      shelf_life: 12,
      warehouse_id: "war_123",
    },
  },
};

const dynamoClient = new AWS.DynamoDB({
  endpoint: "http://localstack:4566",
  region: "eu-west-1",
  credentials: {
    accessKeyId: "test",
    secretAccessKey: "test",
  },
});

describe("lambda", () => {
  it("when an event is handled, the corresponding product is saved in the DB", async () => {
    await axios.post(invokeUrl, event);

    expect(false).toEqual(true);
  });
});

import { EventBridgeEvent } from "aws-lambda";
import { Payload } from "./models";

export const handler: AWSLambda.Handler<
  EventBridgeEvent<string, Payload>
> = () => {};

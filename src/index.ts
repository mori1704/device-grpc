import { DeviceClient } from "../dist/proto/device";
import { credentials } from "@grpc/grpc-js";

(async () => {
  const client = new DeviceClient(
    "localhost:8080",
    credentials.createInsecure()
  );

  client.ping(
    {
      ping: "ping",
    },
    (err, response) => {
      console.log(err, response);
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  client.startDevice(
    {
      channelId: "123",
      jid: "5518991296858.0:4@s.whatsapp.net",
    },
    (err, response) => {
      console.log(err, response);
    }
  );
})();

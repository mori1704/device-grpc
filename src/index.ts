import { DeviceClient } from "../dist/proto/device";
import { credentials } from "@grpc/grpc-js";
import express from "express";

const app = express();

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

  app.get("/list", async (req, res) => {
    client.listDeviceGroups(
      {
        channelId: "123",
      },
      (err, response) => {
        const data = response.groups;

        res.json({
          groups: JSON.parse(Buffer.from(data).toString("utf-8")),
        });
      }
    );
  });

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
})();

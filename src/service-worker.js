// https://create-react-app.dev/docs/making-a-progressive-web-app/

import { BackgroundSyncPlugin } from "workbox-background-sync";
import { registerRoute } from "workbox-routing";
import { NetworkOnly } from "workbox-strategies";

// eslint-disable-next-line no-restricted-globals
const ignored = self.__WB_MANIFEST;

//TODO: be sure to remove local storage for app updates.

const bgSyncPlugin = new BackgroundSyncPlugin("myQueueName", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  /\/api\/.*\/*.json/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST",
);

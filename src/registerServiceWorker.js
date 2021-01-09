// https://create-react-app.dev/docs/making-a-progressive-web-app/

const registerSW = (swUrl, config) => {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;

        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://bit.ly/CRA-PWA.",
              );

              if (config?.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log("Content is cached for offline use.");
              if (config?.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
};

export const register = (config) => {
  if ("serviceWorker" in navigator) {
    const swUrl = `/service-worker.js`;

    registerSW(swUrl, config);

    navigator.serviceWorker.ready.then(() => {
      console.log(
        "This web app is being served cache-first by a service " +
          "worker. To learn more, visit https://create-react-app.dev/docs/making-a-progressive-web-app/",
      );
    });
  }
};

export const unregister = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
};

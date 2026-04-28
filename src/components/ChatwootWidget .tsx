import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSettings: {
      position: string;
      type: string;
      launcherTitle: string;
    };
    chatwootSDK?: {
      run: (config: {
        websiteToken: string;
        baseUrl: string;
      }) => void;
    };
  }
}

const ChatwootWidget = () => {
  useEffect(() => {
    const BASE_URL = "http://172.28.254.41:3000";
    const WEBSITE_TOKEN = "dxBm4uEX151FnXhP2RkCKuZm";

    // Si ya existe, no volver a cargar script
    if (window.chatwootSDK) {
      window.chatwootSDK.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
      return;
    }

    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "",
    };

    const existingScript = document.getElementById("chatwoot-sdk");

    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "chatwoot-sdk";
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: WEBSITE_TOKEN,
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatwootWidget;
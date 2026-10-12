import type { CapacitorConfig } from "@capacitor/cli";
import { APP_CONFIG } from "./src/config";

// appId/appName read from src/config.ts so a rename touches one place.
const config: CapacitorConfig = {
  appId: APP_CONFIG.bundleId,
  appName: APP_CONFIG.displayName,
  webDir: "dist",
  ios: {
    // Deployment target is ALSO set to 15.0 in ios/App/App.xcodeproj/project.pbxproj
    // (avoids Apple's ITMS-90068 warning; 15.0+ mandatory from April 2027).
    limitsNavigationsToAppBoundDomains: true,
  },
};

export default config;

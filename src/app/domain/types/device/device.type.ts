// noinspection SpellCheckingInspection, JSUnusedGlobalSymbols

export const DeviceTypes: string[] =
  [
    'mobile',             // 0
    'tablet',             // 1
    'desktop',            // 2
    'console',            // 3
    'smarttv',            // 4
    'wearable',           // 5
    'xr',                 // 6
    'embedded',           // 7
    'unrecognized',       // 8
  ];

export type DeviceType = typeof DeviceTypes[number];

export const MobileDevice: DeviceType =       DeviceTypes[0];
export const TabletDevice: DeviceType =       DeviceTypes[1];
export const DesktopDevice: DeviceType =      DeviceTypes[2];
export const ConsoleDevice: DeviceType =      DeviceTypes[3];
export const SmartTVDevice: DeviceType =      DeviceTypes[4];
export const WearableDevice: DeviceType =     DeviceTypes[5];
export const XRDevice: DeviceType =           DeviceTypes[6];
export const EmbeddedDevice: DeviceType =     DeviceTypes[7];
export const UnrecognizedDevice: DeviceType = DeviceTypes[8];


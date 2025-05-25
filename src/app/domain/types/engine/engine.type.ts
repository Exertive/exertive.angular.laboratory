
// noinspection SpellCheckingInspection

export const EngineTypes: string[] =
  [
    'Amaya',              // 0
    'ArkWeb',             // 1
    'Blink',              // 2
    'EdgeHTML',           // 3
    'Flow',               // 4
    'Gecko',              // 5
    'Goanna',             // 6
    'iCab',               // 7
    'KHTML',              // 8
    'LibWeb',             // 9
    'Links',              // 10
    'Lynx',               // 11
    'NetFront',           // 12
    'NetSurf',            // 13
    'Presto',             // 14
    'Servo',              // 15
    'Tasman',             // 16
    'Trident',            // 17
    'w3m',                // 18
    'WebKit',             // 19
    'Unrecognized',       // 20
  ];

export type EngineType = typeof EngineTypes[number];

export const AmayaEngine: EngineType = EngineTypes[0];
export const ArkWebEngine: EngineType = EngineTypes[1];
export const BlinkEngine: EngineType = EngineTypes[2];
export const EdgeHTMLEngine: EngineType = EngineTypes[3];
export const FlowEngine: EngineType = EngineTypes[4];
export const GeckoEngine: EngineType = EngineTypes[5];
export const GoannaEngine: EngineType = EngineTypes[6];
export const iCabEngine: EngineType = EngineTypes[7];
export const KHTMLEngine: EngineType = EngineTypes[8];
export const LibWebEngine: EngineType = EngineTypes[9];
export const LinksEngine: EngineType = EngineTypes[10];
export const LynxEngine: EngineType = EngineTypes[11];
export const NetFrontEngine: EngineType = EngineTypes[12];
export const NetSurfEngine: EngineType = EngineTypes[13];
export const PrestoEngine: EngineType = EngineTypes[14];
export const ServoEngine: EngineType = EngineTypes[15];
export const TasmanEngine: EngineType = EngineTypes[16];
export const TridentEngine: EngineType = EngineTypes[17];
export const w3mEngine: EngineType = EngineTypes[18];
export const WebKitEngine: EngineType = EngineTypes[19];
export const UnrecognizedEngine: EngineType = EngineTypes[20];

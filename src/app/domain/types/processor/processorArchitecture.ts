
// noinspection SpellCheckingInspection

export const ProcessorArchitectures: string[] =
  [
    'ia32',             // 0
    'ia64',             // 1
    'amd64',            // 2
    'arm',              // 3
    'arm64',            // 4
    'armhf',            // 5
    'avr',              // 6
    'avr32',            // 7
    'irix',             // 8
    'irix64',           // 9
    'mips',             // 10
    'mips64',           // 11
    '68k',              // 12
    'pa-risc',          // 13
    'ppc',              // 14
    'sparc',            // 15
    'sparc64',          // 16
    'unrecognized'      // 17
  ];

export type ProcessorArchitecture = typeof ProcessorArchitectures[number];

export const IA32Processor: ProcessorArchitecture = ProcessorArchitectures[0];
export const IA64Processor: ProcessorArchitecture = ProcessorArchitectures[1];
export const AMD64Processor: ProcessorArchitecture = ProcessorArchitectures[2];
export const ARMProcessor: ProcessorArchitecture = ProcessorArchitectures[3];
export const ARM64Processor: ProcessorArchitecture = ProcessorArchitectures[4];
export const ARMHFProcessor: ProcessorArchitecture = ProcessorArchitectures[5];
export const AVRProcessor: ProcessorArchitecture = ProcessorArchitectures[6];
export const AVR32Processor: ProcessorArchitecture = ProcessorArchitectures[7];
export const IRIXProcessor: ProcessorArchitecture = ProcessorArchitectures[8];
export const IRIX64Processor: ProcessorArchitecture = ProcessorArchitectures[9];
export const MIPSProcessor: ProcessorArchitecture = ProcessorArchitectures[10];
export const MIPS64Processor: ProcessorArchitecture = ProcessorArchitectures[11];
export const M64KProcessor: ProcessorArchitecture = ProcessorArchitectures[12];
export const PARISCProcessor: ProcessorArchitecture = ProcessorArchitectures[13];
export const PPCProcessor: ProcessorArchitecture = ProcessorArchitectures[14];
export const SPARCProcessor: ProcessorArchitecture = ProcessorArchitectures[15];
export const SPARC64Processor: ProcessorArchitecture = ProcessorArchitectures[16];
export const UnrecognizedProcessor: ProcessorArchitecture = ProcessorArchitectures[17];


export enum ProgressState
{

  Pending =     0x0000,

  Preparing =   0x0001,

  Arranging =   0x0002,

  Composing  =  0x0004,

  Completing =  0x0008,

  Prepared =    0x0010,

  Arranged =    0x0020 | Prepared,

  Composed =    0x0040 | Prepared | Arranged,

  Completed =   0x0080 | Prepared | Arranged | Composed,

}




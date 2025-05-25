
// <summary>
// Defines the Set of Transitions permitted from each 'node' in a State
// Transition Graph consisting of the individual States represented by
// the specified State Enumeration.
// </summary>
// <remarks>
// The 'stricter' version immediately below is not used in favor of the
// 'looser' version to avoid the complexities involved in Enum Generics
// and which takes advantage of the knowledge that State Enumerations
// must be numeric.
// <remarks>

// <exclude>
// export type Transitions<TState> =
//   {
//     [key in State<TState>]: State<TState>[];
//   };
// </exclude>

export type Transitions = { [key: number]: number[]; };


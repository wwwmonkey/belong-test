/*
  Reverse mapping of Enums should allow some versatility eg:
  TileTypes[0] = 'Off'
  TileTypes.Off = 0

  Hopefully, I can use some sort of bitflag if required for Cardinality calculation?
*/

export enum TileTypes {
  Off = 0,
  On = 1,
}

// The game state is an array of cells we can switch on and off
export type GameState = Array<TileTypes>

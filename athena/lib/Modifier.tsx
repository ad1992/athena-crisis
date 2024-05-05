export enum Modifier {
  None = 0,
  Vertical = 1,
  Horizontal = 2,
  Single = 4,
  // Crossings
  HorizontalCrossing = 5,
  VerticalCrossing = 6,
  // Joinable
  JoinableCenter = 7,
  TopLeftCorner = 8,
  BottomLeftCorner = 9,
  TopRightCorner = 10,
  BottomRightCorner = 11,
  TRight = 12,
  TLeft = 13,
  TTop = 14,
  TBottom = 15,
  // Area
  TailUp = 16,
  TailDown = 17,
  TailLeft = 18,
  TailRight = 19,
  Center = 20,
  TopLeftAreaCorner = 21,
  TopRightAreaCorner = 22,
  BottomLeftAreaCorner = 23,
  BottomRightAreaCorner = 24,
  LeftWall = 25,
  TopWall = 26,
  BottomWall = 27,
  RightWall = 28,
  BottomRightEdge = 29,
  TopRightEdge = 30,
  BottomLeftEdge = 31,
  TopLeftEdge = 32,
  TopRightBottomLeftEdge = 33,
  TopLeftBottomRightEdge = 34,
  BottomLeftAndRightEdge = 35,
  TopLeftAndRightEdge = 36,
  TopRightBottomRightEdge = 37,
  TopLeftBottomLeftEdge = 38,
  TopRightIsArea = 39,
  TopLeftIsArea = 40,
  BottomRightIsArea = 41,
  BottomLeftIsArea = 42,

  RightWallBottomLeftEdge = 43,
  LeftWallBottomRightEdge = 44,
  BottomWallRightTopEdge = 45,
  TopWallBottomLeftEdge = 46,
  BottomWallLeftTopEdge = 47,
  LeftWallTopRightEdge = 48,
  RightWallTopLeftEdge = 49,
  TopWallRightBottomEdge = 50,

  RiverFlowsFromTop = 51,
  RiverFlowsFromBottom = 52,
  RiverFlowsFromLeft = 53,
  RiverFlowsFromRight = 54,

  // Variants
  Variant2 = 58,
  Variant3 = 59,

  // Area Decorators
  TopLeftAreaDecorator = 61,
  TopRightAreaDecorator = 62,
  BottomLeftAreaDecorator = 63,
  BottomRightAreaDecorator = 64,
  TopLeftBottomAreaDecorator = 65,
  TopLeftRightAreaDecorator = 66,
  TopRightBottomAreaDecorator = 67,
  TopRightLeftAreaDecorator = 68,
  BottomLeftTopAreaDecorator = 69,
  BottomLeftRightAreaDecorator = 70,
  BottomRightTopAreaDecorator = 71,
  BottomRightLeftAreaDecorator = 72,
  LeftWallAreaDecorator = 73,
  TopWallAreaDecorator = 74,
  BottomWallAreaDecorator = 75,
  RightWallAreaDecorator = 76,
  LeftWallTopAreaDecorator = 77,
  LeftWallBottomAreaDecorator = 78,
  TopWallLeftAreaDecorator = 79,
  TopWallRightAreaDecorator = 80,
  BottomWallLeftAreaDecorator = 81,
  BottomWallRightAreaDecorator = 82,
  RightWallTopAreaDecorator = 83,
  RightWallBottomAreaDecorator = 84,

  Variant4 = 85,
  Variant5 = 3,
  Variant6 = 60,
  Variant7 = 86,

  ConnectingTailUp = 87,
  ConnectingTailDown = 88,
  ConnectingTailLeft = 89,
  ConnectingTailRight = 90,

  SingleConnectingTailUp = 91,
  SingleConnectingTailDown = 92,
  SingleConnectingTailLeft = 93,
  SingleConnectingTailRight = 94,
  VerticalSingle = 96,

  Unused1 = 55,
  Unused2 = 56,
  Unused3 = 57,
  Unused4 = 95,
}

import { pickOne, pushIfExist, remove } from 'utils/array';

type Coordinate = [number, number]

interface RenderParams {
  context: CanvasRenderingContext2D,
  width: number, 
  height: number,
  gridSize: number,
  border: number
}

const render = ({context, width, height, gridSize, border}: RenderParams ) => {
  const startIndices: number[] = [];
  const endIndices: number[] = [];

  const indexToCoordinate = (index: number): Coordinate => {
    const x = index % width;
    const y = (index - x) / width;
    return [ x , y ];
  };
  
  const coordinateToIndex = ([x, y]: Coordinate) => y * width + x;

  const getStart = (): Coordinate => 
    [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
  

  const getEnd = (startCoordinate: Coordinate): (Coordinate | null) => {
    const [x,y] = startCoordinate;

    const candidateCoordinates: Coordinate[] = []; 
    
    if(x > 0) {
      candidateCoordinates.push([x-1, y]);
    }
    if(x < width-1) {
      candidateCoordinates.push([x+1, y]);
    }

    if(y > 0) {
      candidateCoordinates.push([x, y-1]);
    }
    if(y < height-1) {
      candidateCoordinates.push([x, y+1]);
    }

    const candidateIndices = candidateCoordinates.map(coordinateToIndex);
  
    const availableIndex = candidateIndices.filter(index => !endIndices.includes(index));
    
    if(!availableIndex.length) {
      return null;
    }

    const nextIndex = pickOne(availableIndex);
    return indexToCoordinate(nextIndex);
  };  
  
  const drawLine = (from: Coordinate, to: Coordinate) => {
    const [xStart, yStart] = from;
    const [xEnd, yEnd] = to;
    
    const offset = border * 0.75;

    context.beginPath(); 
    context.moveTo(xStart * gridSize +offset, yStart * gridSize+offset); 
    context.lineTo(xEnd * gridSize+offset, yEnd * gridSize+offset); 
    context.stroke(); 
  };

  const interationCount = width * height;

  for(let iteration = 0; iteration < interationCount; iteration ++){ 
    const startCoordinate = getStart();
    const startIndex = coordinateToIndex(startCoordinate);

    const endCoordinate = getEnd(startCoordinate);

    if(!endCoordinate) {
      remove(startIndices, startIndex);
      continue;
    }
        
    const endIndex = coordinateToIndex(endCoordinate);

    pushIfExist(startIndices, startIndex);
    pushIfExist(startIndices, endIndex);
    pushIfExist(endIndices, endIndex);
    drawLine(startCoordinate, endCoordinate);
  }

  //Add dots

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const coordinate: Coordinate = [x,y]; 
      drawLine(coordinate, coordinate);
    }
  } 
};

export { render }; 
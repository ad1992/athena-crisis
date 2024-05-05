import { isHumanPlayer } from '../map/Player.tsx';
import MapData from '../MapData.tsx';

export default function isPvP(map: MapData) {
  return map.getPlayers().filter(isHumanPlayer).length > 1;
}

import useInput from '@deities/ui/controls/useInput.tsx';

export type Direction = 'left' | 'right' | 'up' | 'down';

export default function useGridNavigation(
  callback: (direction: Direction) => void,
) {
  useInput('navigateSecondary', (event) => {
    const { detail } = event;
    const direction =
      detail.x === -1
        ? 'left'
        : detail.x === 1
          ? 'right'
          : detail.y === -1
            ? 'up'
            : detail.y === 1
              ? 'down'
              : null;
    if (direction) {
      callback(direction);
    }
  });
}

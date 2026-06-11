import { onMounted, onUnmounted } from "vue";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(callback: () => void) {
  let index = 0;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === KONAMI[index]) {
      index++;
      if (index === KONAMI.length) {
        callback();
        index = 0;
      }
    } else {
      index = 0;
    }
  };

  onMounted(() => window.addEventListener("keydown", onKeyDown));
  onUnmounted(() => window.removeEventListener("keydown", onKeyDown));
}

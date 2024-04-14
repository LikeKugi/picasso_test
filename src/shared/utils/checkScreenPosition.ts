const DOWN_SCREEN = 5

export const checkScreenPosition = () => {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  if (height <= screenHeight) {
    return true;
  }

  const scrolled = window.scrollY;

  const threshold = height - screenHeight / DOWN_SCREEN;

  const position = scrolled + screenHeight;

  return position >= threshold;
}

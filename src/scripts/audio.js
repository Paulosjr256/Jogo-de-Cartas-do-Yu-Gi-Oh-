export async function playAudio(status) {
  try {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    await audio.play();
  } catch (e) {
    console.warn("Audio play failed:", e);
  }
}

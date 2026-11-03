"use strict";

const sceneData = {
  occlusion: {
    tag: "DYNAMIC OCCLUSION",
    description: "A moving bus hides stable structures in a narrow street.",
    prior: "Treat transient occlusion as unreliable geometry.",
    explanation: "Mid-range and global context receive more emphasis in the paper's occluded-street example.",
    local: "22%",
    mid: "67%",
    global: "71%"
  },
  vegetation: {
    tag: "VEGETATION-HEAVY AREA",
    description: "Foliage makes point density and local geometry less consistent.",
    prior: "Recognize the scene change instead of fitting one uniform pattern.",
    explanation: "The paper's vegetation-heavy example gives the mid-range expert the strongest contribution.",
    local: "25%",
    mid: "82%",
    global: "53%"
  },
  open: {
    tag: "OPEN ROAD",
    description: "An open road provides fewer distinctive nearby landmarks.",
    prior: "Use broad scene structure when local cues are sparse.",
    explanation: "The paper's open-road example relies more heavily on the global-context expert.",
    local: "26%",
    mid: "48%",
    global: "83%"
  }
};

const sceneVisual = document.getElementById("scene-visual");
const sceneButtons = document.querySelectorAll("[data-scene-button]");

function showScene(name) {
  const scene = sceneData[name];
  if (!scene || !sceneVisual) return;
  sceneVisual.dataset.scene = name;
  document.getElementById("scene-tag").textContent = scene.tag;
  document.getElementById("scene-description").textContent = scene.description;
  document.getElementById("scene-prior").textContent = scene.prior;
  document.getElementById("scene-explanation").textContent = scene.explanation;
  document.getElementById("expert-local").style.width = scene.local;
  document.getElementById("expert-mid").style.width = scene.mid;
  document.getElementById("expert-global").style.width = scene.global;
  sceneButtons.forEach((button) => {
    const active = button.dataset.sceneButton === name;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => showScene(button.dataset.sceneButton));
});
showScene("occlusion");

const copyButton = document.getElementById("copy-link");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("https://reckozmh.github.io/ViLo/");
      copyButton.textContent = "Link copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy project link ⧉";
      }, 2200);
    } catch {
      copyButton.textContent = "Copy unavailable";
      window.setTimeout(() => {
        copyButton.textContent = "Copy project link ⧉";
      }, 2200);
    }
  });
}

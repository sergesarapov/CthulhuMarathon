export default function getHouse(container) {
  const id = Math.floor(Math.random() * 100000);
  container.insertAdjacentHTML(
    "beforeend",
    `<div id=${id} class="house move">
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    <div class="window"></div>
    </div>`
  );
  const house = document.getElementById(`${id}`);
  house.style.width = getRandomWall();
  house.style.height = getRandomWall();
  setInterval(() => {
    house.remove();
  }, 4000);
}

function getRandomWall() {
  const max = 100;
  const min = 20;
  const get = () => Math.floor(Math.random() * (max - min + 1)) + min;
  return get() + "px";
}

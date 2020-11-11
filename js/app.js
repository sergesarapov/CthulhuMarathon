const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const character = new Image();
const house = new Image();
const bg = new Image();
bg.src = "../img/bg.jpg";
character.src = "../img/cthulhu.png";
house.src = "../img/house.png";

const position = {
  x: 150,
  y: canvas.height - 50,
};
const housePosition = [
  {
    x: canvas.width,
    y: canvas.height - 100,
  },
];

const jump = (e) => {
  if (e.key === " ") {
    position.y = canvas.height - 180;
  }
};

const land = (e) => {
  if (e.key === " ") {
    position.y = canvas.height - 50;
  }
};

document.addEventListener("keydown", jump);
document.addEventListener("keyup", land);

function draw() {
  ctx.drawImage(bg, 0, 0, 1000, 600);
  ctx.fillStyle = "rgba(0, 0, 0, .6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(character, position.x, position.y, 60, 50);

  for (let index = 0; index < housePosition.length; index++) {
    ctx.drawImage(
      house,
      housePosition[index].x,
      housePosition[index].y,
      120,
      100
    );
    housePosition[index].x -= 5;
    if (housePosition[index].x === 200) {
      housePosition.push({
        x: canvas.width,
        y: canvas.height - 100,
      });
    }
    if (
      position.x + 60 >= housePosition[index].x &&
      position.x <= housePosition[index].x + 120 &&
      position.y + 50 >= housePosition[index].y
    ) {
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);
      location.reload();
      //   console.log(position.y, housePosition[index].y);
    }
  }
  requestAnimationFrame(draw);
}

draw();

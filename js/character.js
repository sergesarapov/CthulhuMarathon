export default class Cthulhu {
  constructor(container) {
    this.container = container;
    this.isStanding = true;
    this._render();
    this.character = document.querySelector(".cthulhu");
    this._idle(this.isStanding);
    this._jump();
  }

  _idle(bool) {
    bool
      ? this.character.classList.add("bounce")
      : this.character.classList.remove("bounce");
  }

  _jump() {
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        this._idle(false);
        this.character.style.marginLeft = "300px";
        this.character.classList.add("jump");
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        this.character.classList.remove("jump");
      }
    });
  }

  _render() {
    const char = `<div class="cthulhu"></div>`;
    this.container.insertAdjacentHTML("beforeend", char);
  }
}

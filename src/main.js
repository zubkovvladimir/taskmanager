import {createControlsTemplate} from "./components/control.js";
import {createFiltersTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createEditTaskTemplate} from "./components/edit-task.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadButtonTemplate} from "./components/load-button.js";

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const controlsContainer = main.querySelector(`.main__control`);

render(controlsContainer, createControlsTemplate());
render(main, createFiltersTemplate());
render(main, createBoardTemplate());

const board = main.querySelector(`.board`);
const boardTasks = board.querySelector(`.board__tasks`);

render(boardTasks, createEditTaskTemplate());

for (let i = 0; i < 3; i++) {
  render(boardTasks, createTaskTemplate());
}

render(board, createLoadButtonTemplate());

const createControlsTemplate = () => {
    return (
        `<section class="control__btn-wrap">
            <input
                type="radio"
                name="control"
                id="control__new-task"
                class="control__input visually-hidden"
            />
            <label for="control__new-task" class="control__label control__label--new-task"
                >+ ADD NEW TASK</label
            >
            <input
                type="radio"
                name="control"
                id="control__task"
                class="control__input visually-hidden"
                checked
            />
            <label for="control__task" class="control__label">TASKS</label>
            <input
                type="radio"
                name="control"
                id="control__statistic"
                class="control__input visually-hidden"
            />
            <label for="control__statistic" class="control__label"
                >STATISTICS</label
            >
            </section>`
    )
};

const createFiltersTemplate = () => {
    return (
        `<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          All <span class="filter__all-count">1</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >Overdue <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >Today <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__favorites" class="filter__label"
          >Favorites <span class="filter__favorites-count">0</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">0</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >Archive <span class="filter__archive-count">115</span></label
        >
      </section>`
    )
};

const createBoardTemplate = () => {
    return (
        `<section class="board container">
            <div class="board__filter-list">
            <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
            <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
            <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
            </div>

            <div class="board__tasks"></div>
        </section>`
    )
};

const createEditTaskTemplate = () => {
    return (
        `<article class="card card--edit card--black">
            <form class="card__form" method="GET">
              <div class="card__inner">
                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlinkHref="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >This is example of new task, you can set date and time.</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">no</span>
                      </button>

                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder="23 September"
                            name="date"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">no</span>
                      </button>

                      <fieldset class="card__repeat-days" disabled>
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-1"
                            name="repeat"
                            value="mo"
                          />
                          <label class="card__repeat-day" for="repeat-mo-1"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-1"
                            name="repeat"
                            value="tu"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-tu-1"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-1"
                            name="repeat"
                            value="we"
                          />
                          <label class="card__repeat-day" for="repeat-we-1"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-1"
                            name="repeat"
                            value="th"
                          />
                          <label class="card__repeat-day" for="repeat-th-1"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-1"
                            name="repeat"
                            value="fr"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-fr-1"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            name="repeat"
                            value="sa"
                            id="repeat-sa-1"
                          />
                          <label class="card__repeat-day" for="repeat-sa-1"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-1"
                            name="repeat"
                            value="su"
                            checked
                          />
                          <label class="card__repeat-day" for="repeat-su-1"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input
                        type="radio"
                        id="color-black-1"
                        class="card__color-input card__color-input--black visually-hidden"
                        name="color"
                        value="black"
                        checked
                      />
                      <label
                        for="color-black-1"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-1"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        name="color"
                        value="yellow"
                      />
                      <label
                        for="color-yellow-1"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-1"
                        class="card__color-input card__color-input--blue visually-hidden"
                        name="color"
                        value="blue"
                      />
                      <label
                        for="color-blue-1"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-1"
                        class="card__color-input card__color-input--green visually-hidden"
                        name="color"
                        value="green"
                      />
                      <label
                        for="color-green-1"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-1"
                        class="card__color-input card__color-input--pink visually-hidden"
                        name="color"
                        value="pink"
                      />
                      <label
                        for="color-pink-1"
                        class="card__color card__color--pink"
                        >pink</label
                      >
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`
    )
};

const createTaskTemplate = () => {
    return (
        `<article class="card card--black">
            <div class="card__form">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlinkHref="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <p class="card__text">Example default task with default color.</p>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">23 September</span>
                          <span class="card__time">16:15</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>`
    )
};

const createLoadButtonTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    )
};

const render = (container, template, place = 'beforeend') => {
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

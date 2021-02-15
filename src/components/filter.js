const createFilterTemplate = (filter, isChecked) => {
  const {name, count} = filter;
  return (
    `<input
        type="radio"
        id="filter__${name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__all-count">${count}</span></label
      >
    `
  );
};

const createFilterMarkup = (filtersData) => {
  const filtersMarkup = filtersData.map((it, i) => {
    return createFilterTemplate(it, i === 0);
  }).join(``);

  return `<section class="main__filter filter container">
            ${filtersMarkup}
          </section>`;
};

export {createFilterMarkup};

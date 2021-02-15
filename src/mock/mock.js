const filters = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

const generateFilters = filters.map((it) => {
  return {
    name: it,
    count: Math.floor(Math.random() * 10),
  };
});

export {generateFilters};

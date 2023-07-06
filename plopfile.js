function plopFunc(plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/frontend/Components/{{name}}/",
        base: "templates/react/",
        templateFiles: "templates/react/**",
      },
    ],
  });
}

module.exports = plopFunc;

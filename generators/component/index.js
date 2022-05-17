const Generator = require("yeoman-generator");

module.exports = class ComponentGenerator extends Generator {
  async prompting() {
    const data = await this.prompt([
      {
        type: "input",
        name: "componentName",
        required: true,
        message: "What would you like to name your component?",
      },
      {
        type: "input",
        name: "directory",
        required: true,
        message: "Where would you like your component to live?",
        default: "components",
      },
    ]);
    this.data = data;
  }

  writing() {
    const { componentName, directory } = this.data;
    const componentPath = `${directory}/${componentName}`;

    this.fs.copyTpl(
      this.templatePath("component.tsx.template"),
      this.destinationPath(componentPath, `${componentName}.tsx`),
      { componentName }
    );

    this.fs.copyTpl(
      this.templatePath("component.spec.tsx.template"),
      this.destinationPath(componentPath, `${componentName}.spec.tsx`),
      { componentName }
    );

    this.fs.copyTpl(
      this.templatePath("index.ts.template"),
      this.destinationPath(componentPath, "index.ts"),
      { componentName }
    );
  }
};

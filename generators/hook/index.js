const Generator = require("yeoman-generator");

module.exports = class HookGenerator extends Generator {
  async prompting() {
    const data = await this.prompt([
      {
        type: "input",
        name: "hookName",
        required: true,
        message: "What would you like to name your hook?",
      },
      {
        type: "input",
        name: "directory",
        required: true,
        message: "Where would you like your component to live?",
        default: "hooks",
      },
    ]);
    this.data = data;
  }

  writing() {
    const { hookName, directory } = this.data;
    const formattedHookName =
      hookName.slice(0, 3).toLowerCase() === "use"
        ? hookName.charAt(3).toUpperCase() + hookName.slice(4)
        : hookName.charAt(0).toUpperCase() + hookName.slice(1);
    const hookFileName = `use${formattedHookName}`;

    this.fs.copyTpl(
      this.templatePath("hook.tsx.template"),
      this.destinationPath(directory, `${hookFileName}.tsx`),
      { hookName: formattedHookName }
    );

    this.fs.copyTpl(
      this.templatePath("hook.spec.tsx.template"),
      this.destinationPath(directory, `${hookFileName}.spec.tsx`),
      { hookName: formattedHookName }
    );
  }
};

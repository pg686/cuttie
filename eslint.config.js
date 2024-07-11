import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    files: ["src/**/*.js"],
    rules: {
        semi: "error" 
    }},
    {
      // recommended configuration included in the plugin
      ...html.configs["flat/recommended"],
      files: ["**/*.html"],
      rules: {
        ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
        "@html-eslint/indent": "error",
      }
    }

];
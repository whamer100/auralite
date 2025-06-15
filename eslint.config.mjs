import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([{
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: 2019,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                impliedStrict: true,
            },
        },
    },

    rules: {
        semi: "error",
        "for-direction": "error",
        "no-dupe-args": "error",
        "no-empty": "warn",
        "no-duplicate-case": "error",
        "no-extra-semi": "error",
        "no-sparse-arrays": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "valid-typeof": "warn",
        eqeqeq: "error",
        "no-floating-decimal": "error",
        "prefer-const": "error",
    },
}]);
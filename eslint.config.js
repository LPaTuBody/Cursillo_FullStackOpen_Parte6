import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import { fixupConfigRules } from "@eslint/compat"
import reactRefresh from "eslint-plugin-react-refresh"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
    baseDirectory: 'anecdotes-redux',
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    )),

    settings: {
        react: { version: "18.2" },
    },

    plugins: {
        "react-refresh": reactRefresh,
    },

    rules: {
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],
    },
}, globalIgnores(["**/dist", "**/.eslintrc.cjs"])])

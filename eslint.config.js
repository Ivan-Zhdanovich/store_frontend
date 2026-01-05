import senchaExtjs from "@sencha/eslint-plugin-extjs";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/ext/**",
      "**/resources/**",
      "storeApp-client/node_modules/**",
      "storeApp-client/build/**",
    ],
  },
  {
    files: ["**/*.js"],
    plugins: {
      "@sencha/extjs": senchaExtjs,
    },
    rules: {
      ...senchaExtjs.configs.recommended.rules,
    },
  },
];

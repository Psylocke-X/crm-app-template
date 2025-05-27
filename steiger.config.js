import fsd from "@feature-sliced/steiger-plugin";
import { defineConfig } from "steiger";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    files: ["./src/entities/**"],
    rules: {
      // При последовательном выполнении проекта без этого правила steiger будет пушить поднять сущности наверх, что приведет к дополнительным работам в дальнейшем
      "fsd/insignificant-slice": "off",
    },
  },
]);

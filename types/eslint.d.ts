declare module '@eslint/js' {
  interface ESLintConfig {
    recommended: any;
  }
  export const configs: ESLintConfig;
}

declare module 'typescript-eslint' {
  interface TSESLintConfig {
    recommended: any[];
  }
  export function config(...args: any[]): any;
  export const configs: TSESLintConfig;
}

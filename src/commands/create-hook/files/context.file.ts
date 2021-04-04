import { createLines, FileData } from 'utils';

export const contextFile = (name: string): FileData => ({
  folder: 'context',
  name: `${name}Context.ts`,
  data: createLines(
    "import { createContext } from 'react';",
    `import { _use${name} } from '../__hooks/_use${name}';`,
    '',
    `type Context = ReturnType<typeof _use${name}>;`,
    '',
    `export const ${name}Context = createContext({} as Context);`
  ),
});

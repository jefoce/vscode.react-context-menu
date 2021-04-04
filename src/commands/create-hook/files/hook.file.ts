import { createLines, FileData } from 'utils';

export const hookFile = (name: string): FileData => ({
  folder: 'hooks',
  name: `use${name}.ts`,
  data: createLines(
    "import { useContext } from 'react';",
    `import { ${name}Context } from '../context/${name}Context';`,
    '',
    `export const use${name} = () => useContext(${name}Context);`
  ),
});

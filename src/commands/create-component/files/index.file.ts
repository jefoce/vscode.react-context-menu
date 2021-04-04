import { createLines, FileData } from 'utils';

export const indexFile = (name: string): FileData => ({
  folder: name,
  name: 'index.ts',
  data: createLines(`export { ${name} } from './${name}';`),
});

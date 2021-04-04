import { createLines, FileData } from 'utils';

export const contextHookFile = (name: string): FileData => ({
  open: true,
  folder: '__hooks',
  name: `_use${name}.ts`,
  data: createLines(
    "import React from 'react';",
    '',
    `export const _use${name} = () => {`,
    '\t',
    '\treturn {};',
    '};'
  ),
});

import { createLines, FileData } from 'utils';

export const providerFile = (name: string): FileData => ({
  open: true,
  folder: 'providers',
  name: `${name}Provider.tsx`,
  data: createLines(
    "import React from 'react';",
    `import { _use${name} } from '../__hooks/_use${name}';`,
    '',
    `import { ${name}Context } from '../context/${name}Context';`,
    '',
    'type Props = {};',
    '',
    `export const ${name}Provider: React.FC<Props> = ({ children }) => {`,
    `\tconst context = _use${name}();`,
    '',
    `\treturn <${name}Context.Provider value={context}>{children}</${name}Context.Provider>;`,
    '}'
  ),
});

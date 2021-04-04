import { createLines, FileData } from 'utils';

export const componentFile = (name: string): FileData => ({
  open: true,
  folder: name,
  name: `${name}.tsx`,
  data: createLines(
    `import * as styled from './${name}.styled';`,
    '',
    'type Props = {};',
    '',
    `export const ${name}: React.FC<Props> = ({ children }) => {`,
    '\treturn <styled.BodyWrapper></styled.BodyWrapper>;',
    '};'
  ),
});

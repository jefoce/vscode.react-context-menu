import { createLines, FileData } from 'utils';

export const styledFile = (name: string): FileData => ({
  folder: name,
  name: `${name}.styled.ts`,
  data: createLines(
    `import styled from 'styled-components';`,
    '',
    'export const BodyWrapper = styled.div`',
    '\t',
    '`;'
  ),
});

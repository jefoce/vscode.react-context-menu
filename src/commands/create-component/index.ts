import { createFile, createCommand, prompt } from 'utils';

import { indexFile } from './files/index.file';
import { styledFile } from './files/styled.file';
import { componentFile } from './files/component.file';

const createComponent = async (path: string, name: string) => {
  const create = createFile(path);

  await create(indexFile(name));
  await create(styledFile(name));
  await create(componentFile(name));
};

export const createComponentCommand = () => createCommand('createComponent', async (path) => {
  const name = await prompt({ defaultValue: 'ReactComponent', placeHolder: 'React component name' });
  name && await createComponent(path, name);
});

import { createFile, createCommand, prompt } from 'utils';

import { hookFile } from './files/hook.file';
import { contextFile } from './files/context.file';
import { providerFile } from './files/provider.file';
import { contextHookFile } from './files/context-hook.file';

const createHook = async (path: string, name: string) => {
  const create = createFile(path);

  await create(hookFile(name));
  await create(contextFile(name));
  await create(providerFile(name));
  await create(contextHookFile(name));
};

export const createHookCommand = () => createCommand('createHook', async (path) => {
  const name = await prompt({ defaultValue: 'ReactHook', placeHolder: 'React hook name' });
  name && await createHook(path, name);
});

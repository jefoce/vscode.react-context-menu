import { window, workspace } from 'vscode';
import { exists as _exists, promises as fsp } from "fs";

export type FileData = {
  name   : string;
  data   : string;
  folder?: string;
  open  ?: boolean;
};

export const createFile = (path: string) => async ({ name, folder, data, open }: FileData) => {
  const folderPath = folder ? `${path}/${folder}` : path;
  const filePath = `${folderPath}/${name}`;

  if (await exists(filePath)) {
    return;
  }

  if (!(await exists(folderPath))) {
    await fsp.mkdir(folderPath, { recursive: true });
  }
  
  await fsp.writeFile(filePath, data, { encoding: 'utf8' });
  
  if (open) {
    const document = await workspace.openTextDocument(filePath);
    window.showTextDocument(document, { preview: false });
  }
};

function exists(path: string) {
  return new Promise<boolean>((res) => _exists(path, res));
}

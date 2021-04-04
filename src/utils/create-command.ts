import { commands } from 'vscode';

type Callback = (path: string) => void;

export const createCommand = (key: string, callback: Callback) =>
  commands.registerCommand(`react-context-menu.${key}`, (e) => callback(e.fsPath));
import { window } from 'vscode';

type Config = {
  defaultValue: string;
  placeHolder?: string;
};

export const prompt = async ({ defaultValue, placeHolder }: Config) =>
  await window.showInputBox({ value: defaultValue, placeHolder });

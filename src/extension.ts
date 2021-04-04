import * as vscode from 'vscode';

import { createComponentCommand, createHookCommand } from './commands';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(createComponentCommand());
	context.subscriptions.push(createHookCommand());
}

export function deactivate() {}

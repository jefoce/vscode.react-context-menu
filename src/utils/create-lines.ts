export const createLines = (...lines: string[]) => {
  let output = '';

  for (const line of lines) {
    output += line + '\n';
  }

  return output;
};

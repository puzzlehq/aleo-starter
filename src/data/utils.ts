export const copyOnClick = (textToCopy: string, noun: string | null) => {
  navigator.clipboard.writeText(textToCopy);

  // Toast({ title: noun + ' copied', id: noun + 'copy', color: 'solo_green' });
};

export const NAVIGATION_KEYS = [
  'Backspace',
  'Delete',
  'Tab',
  'Escape',
  'Enter',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  'Home',
  'End',
] as const;

export const SHORTCUT_KEYS = ['c', 'v', 'x'] as const;

export type NavigationKey = typeof NAVIGATION_KEYS[number];
export type ShortcutKey = typeof SHORTCUT_KEYS[number];

export function isNavigationKey(key: string): key is NavigationKey {
  return NAVIGATION_KEYS.includes(key as NavigationKey);
}

export function isShortcutKey(key: string): key is ShortcutKey {
  return SHORTCUT_KEYS.includes(key as ShortcutKey);
}

export function handleNumericKeyDown(e: React.KeyboardEvent<HTMLInputElement>): boolean {
  if (isNavigationKey(e.key)) return false;

  if ((e.ctrlKey || e.metaKey) && isShortcutKey(e.key.toLowerCase())) {
    return false;
  }

  if (/^[0-9]$/.test(e.key)) return false;

  e.preventDefault();
  return true;
}

export function handleLetterKeyDown(e: React.KeyboardEvent<HTMLInputElement>): boolean {
  if (isNavigationKey(e.key)) return false;

  if ((e.ctrlKey || e.metaKey) && isShortcutKey(e.key.toLowerCase())) {
    return false;
  }

  if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]$/.test(e.key)) return false;

  e.preventDefault();
  return true;
}

export function handleMixedKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>,
  options: {
    allowNumbers?: boolean;
    allowLetters?: boolean;
    allowSpaces?: boolean;
    extraAllowed?: string[];
  }
): boolean {
  const { allowNumbers = true, allowLetters = true, allowSpaces = false, extraAllowed = [] } = options;

  if (isNavigationKey(e.key)) return false;

  if ((e.ctrlKey || e.metaKey) && isShortcutKey(e.key.toLowerCase())) {
    return false;
  }

  const patterns: string[] = [];

  if (allowNumbers) patterns.push('0-9');
  if (allowLetters) patterns.push('a-záéíóúÁÉÍÓÚñÑüÜ');
  if (allowSpaces) patterns.push('\\s');
  if (extraAllowed.length > 0) patterns.push(...extraAllowed);

  const pattern = new RegExp(`^[${patterns.join('')}]$`);

  if (pattern.test(e.key)) return false;

  e.preventDefault();
  return true;
}
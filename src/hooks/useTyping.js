import { useEffect, useState } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Typewriter effect that cycles through `words`.
 * Reduced-motion users get a calm, static first word.
 */
export default function useTyping(words, { typeSpeed = 70, deleteSpeed = 38, hold = 1600 } = {}) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(reduced ? words[0] : '');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return undefined;
    }
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = hold;
    if (deleting && text === '') delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduced, typeSpeed, deleteSpeed, hold]);

  return text;
}

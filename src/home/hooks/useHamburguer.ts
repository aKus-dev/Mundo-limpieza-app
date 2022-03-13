import { useRef } from 'react';

export const useHamburguer = () => {
    const span1 = useRef<HTMLSpanElement>(null);
    const span2 = useRef<HTMLSpanElement>(null);
    const span3 = useRef<HTMLSpanElement>(null);

    const handleHamburguer = () => {
        const bar1 = span1.current;
        const bar2 = span2.current;
        const bar3 = span3.current;

        // 6px (gap) + 2px (height)
        bar1!.classList.toggle('translate-y-[8px]');
        bar1!.classList.toggle('rotate-45');

        bar2!.classList.toggle('opacity-0');

        bar3!.classList.toggle('translate-y-[-8px]');
        bar3!.classList.toggle('rotate-[-45deg]');
    }

    return {span1, span2, span3, handleHamburguer}

}
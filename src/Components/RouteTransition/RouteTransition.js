import { useTransition } from 'react-spring';
export function RouteTransition() {
  return useTransition(true, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 150ms',
    },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    delay: 1450,
  });
}

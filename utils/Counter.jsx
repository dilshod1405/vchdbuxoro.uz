import { useInView } from 'react-intersection-observer';
import { useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const Counter = ({ target }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0); // motionValue
  const spring = useSpring(count, { stiffness: 100, damping: 20 });
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let current = 0;
      const increment = Math.ceil(target / 50);

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        count.set(current);
      }, 30);

      return () => clearInterval(interval);
    }
  }, [inView, target, count]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe(); // tozalash
  }, [spring]);

  return (
    <div ref={ref}>
      <span className="text-4xl font-bold">{displayValue}</span>
    </div>
  );
};

export default Counter;

import useReveal from "../hooks/useReveal";

export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}

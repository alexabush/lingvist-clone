import react from 'react';

export default function Tooltip({
  display = 'hello world',
  direction = 'bottom',
  color = 'blue',
  width = 100,
  children,
}) {
  return (
    <div className={`Tooltip-container Tooltip-${direction}`}>
      <div data-color={color} className="Tooltip" data-display={display} />
      {children}
      <style jsx>{`
        .Tooltip-container {
          position: relative;
        }
        .Tooltip-container:hover .Tooltip::before {
          display: block;
        }
        .Tooltip-container:hover .Tooltip::after {
          display: block;
        }
        .Tooltip::before {
          display: none;
          width: ${width}px;
          content: attr(data-display);
          background: ${color};
          color: white;
          padding: 5px 20px;
          border-radius: 5px;
          position: absolute;
        }
        .Tooltip::after {
          display: none;
          content: '';
          border-style: solid;
          position: absolute;
        }

        .Tooltip-top .Tooltip::before {
          top: -40px;
          left: calc(-${width / 2}px);
        }
        .Tooltip-top .Tooltip::after {
          border-width: 8px 6px 0px 6px;
          border-color: ${color} transparent transparent transparent;
          top: -12px;
          left: calc(-50%);
        }
      `}</style>
    </div>
  );
}

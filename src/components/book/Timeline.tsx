const Timeline = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <input type="range" min="0" max={currentYear} step="1" />
    </div>
  );
};

export default Timeline;

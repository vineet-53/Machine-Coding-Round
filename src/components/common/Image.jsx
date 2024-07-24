export default function Image({ icon, alt = "image", styles, onClick }) {
  return (
    <>
      <img
        src={icon}
        alt={alt}
        className={`${styles} px-2`}
        onClick={onClick}
      />
    </>
  );
}

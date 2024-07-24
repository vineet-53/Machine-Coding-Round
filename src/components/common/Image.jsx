export default function Image({ icon, alt = "image", styles }) {
  return <img src={icon} alt={alt} className={`${styles} px-2`} />;
}

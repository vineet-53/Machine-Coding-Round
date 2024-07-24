export default function ListItem({ children, styles, onClick }) {
  return (
    <li
      className={`flex  items-center gap-2 list-none ${styles} py-2 px-4 rounded-md cursor-pointer hover:text-opacity-60`}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

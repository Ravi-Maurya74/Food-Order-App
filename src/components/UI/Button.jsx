export default function Button({ children, textOnly, classname, ...props }) {
  let classes = textOnly
    ? "text-yellow-300"
    : "bg-yellow-500 py-1 px-2 m-4 text-black rounded-sm";
  classes = textOnly ? classname : classes + " " + classname;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

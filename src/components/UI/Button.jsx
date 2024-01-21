export default function Button({children, textOnly, classname, ...props}){
    let classes = textOnly ? "text-black " : "bg-yellow-500 py-1 px-2 m-4 text-black rounded-sm";
    classes += " " + classname;
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
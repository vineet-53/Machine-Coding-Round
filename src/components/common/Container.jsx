export default function Container({
  title,
  subTitle,
  children,
  courses = false,
  batches = false,
}) {
  return (
    <div
      className={`${courses && "bg-[#ffffff]"} ${batches && "bg-[#ffffff] "} py-3 rounded-xl lg:mx-0 lg:w-9/12 md:py-14 md:px-5`}
    >
      <div className="flex flex-col gap-y-2 px-6 md:gap-y-3 text-left py-2 ">
        <h2
          className={`${courses && ""} ${batches && ""} text-[#313131] font-bold text-3xl md:text-4xl`}
        >
          {title}
        </h2>
        <p
          className={`${courses && ""} ${batches && ""} text-[#4B4747] font-normal text-lg md:text-xl `}
        >
          {subTitle}
        </p>
      </div>
      {children}
    </div>
  );
}

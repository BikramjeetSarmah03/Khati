type Props = {
  align?: "left" | "right" | "top" | "bottom";
  center?: boolean;
  title: string;
};

export default function Heading({ title, align, center }: Props) {
  return (
    <h1 className="relative mx-auto text-4xl font-bold text-center w-fit">
      {title}
      <span
        className={`absolute -bottom-2 w-20 h-0.5 bg-primary ${
          align ? align + "-0" : ""
        } ${center ? "left-0 right-0 mx-auto" : ""}`}></span>
    </h1>
  );
}

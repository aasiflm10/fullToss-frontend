import { twMerge } from "tailwind-merge";

export function Image({ className, src }: { className: string; src: string }) {
  return (
    <div>
      <img
        className={twMerge(className, "object-cover w-full h-full")}
        src={
          src
            ? src
            : "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt=""
      />
    </div>
  );
}

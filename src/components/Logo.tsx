import Image from "next/image";

export default function Logo() {
  return (
      <h1>
        <Image
          src="/logo_infralink.png"
          alt=""
          width={100}
          height={100}
        />
      </h1>
  );
}

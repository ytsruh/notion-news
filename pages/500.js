import Image from "next/image";

export default function Custom500() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">500 - Something went wrong</h1>
      <div className="my-5">
        <Image src="/errorCat.jpeg" alt="500 : Error Cat says whaaaat" width="800" height="400" />
      </div>
    </div>
  );
}

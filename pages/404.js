import Image from "next/image";

export default function Custom404() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <div className="my-5">
        <Image src="/errorCat.jpeg" alt="404 : Error Cat says whaaaat" width="800" height="400" />
      </div>
    </div>
  );
}

import ProfileImage from "./profile-image";

export default function Hero() {
  return (
    <section className="my-6 text-center md:text-left">
      <h1 className="text-transparent text-6xl md:text-8xl font-bold">
        <span className="block py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          Software Engineer.
        </span>
        <span className="block py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          Husband.
        </span>
        <span className="block py-2 bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          Father.
        </span>
      </h1>
      <div className="relative">
        <ProfileImage />
      </div>
    </section>
  );
}

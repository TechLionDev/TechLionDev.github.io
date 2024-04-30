import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const About = () => {
  return (
    <>
      <div className="md:mx-8 mx-4 flex md:flex-row flex-col rounded-lg md:p-12 p-6 gap-4">
        <Avatar className="aspect-square h-32 w-32 flex mx-auto md:mx-0">
          <AvatarImage
            src="https://cdn.techlion.dev/logos/png/icons/Color.png"
            alt="TLD Avatar"
          />
          <AvatarFallback>TLD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">Hi I&apos;m Jeremiah! 👋</h1>
          <p className="mt-4 text-lg">
            I&apos;m a full-stack developer and a tech enthusiast. I love to
            build things and I&apos;m always learning something new. I&apos;m
            passionate about web development, cloud computing, and open-source
            software.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-screen w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative pb-5 z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Coming Soon!
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          My portfolio is currently under construction. I&apos;m working hard to
          bring you an exciting new website that showcases my projects, skills,
          and experiences. Stay tuned for the launch!
        </p>
        {/* <Input
          type="email"
          placeholder="hi@manuarora.in"
          className="w-full mt-4 relative z-10"
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="grid place-items-center gap-6 md:hidden lg:hidden">
      <ProjectCardSkeleton />

      <ProjectCardSkeleton />

      <ProjectCardSkeleton />
      </div>
      <div className="hidden grid-cols-2 place-items-center gap-6 md:grid lg:hidden">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />

        <ProjectCardSkeleton />
        <ProjectCardSkeleton />

        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
      <div className="hidden grid-cols-3 place-items-center gap-6 md:hidden lg:grid">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />

        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />

        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </>
  );
};

export default Loading;

const ProjectCardSkeleton = () => {
  return (
    <div className="mx-auto my-6 h-60 max-h-60 min-h-60 w-96 min-w-96 max-w-96 rounded-lg border bg-card text-card-foreground shadow-sm md:m-6">
      <div className="flex flex-col space-y-1.5 p-6">
        <Skeleton className="h-4 w-[250px]"></Skeleton>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-[200px]"></Skeleton>
            <Skeleton className="h-4 w-[200px]"></Skeleton>
            <Skeleton className="h-4 w-[200px]"></Skeleton>
          </div>
        </div>
      </div>
      <div className="flex items-center p-6 pt-0">
        <Skeleton className="inline-flex h-10 w-2/5 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></Skeleton>
      </div>
    </div>
  );
};

import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/80 to-white/10 p-1 shadow-[0_10px_30px_rgba(180,120,80,0.25)] dark:from-white/10 dark:to-transparent dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <Image
          src={avatarUrl}
          alt={`${name} 프로필 사진`}
          width={96}
          height={96}
          className="rounded-full object-cover ring-1 ring-black/5 dark:ring-white/10"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-foreground">{name}</h1>
        <p className="text-sm text-foreground/65">{bio}</p>
      </div>
    </div>
  );
}

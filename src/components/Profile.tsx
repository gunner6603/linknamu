import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src={avatarUrl}
        alt={`${name} 프로필 사진`}
        width={96}
        height={96}
        className="rounded-full object-cover"
        priority
      />
      <h1 className="text-xl font-bold text-foreground">{name}</h1>
      <p className="text-sm text-foreground/70">{bio}</p>
    </div>
  );
}

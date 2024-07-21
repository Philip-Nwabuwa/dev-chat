import Image from "next/image";

import userPalceholder from "@/assets/images/user-placeholder.png";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}

const UserAvatar = ({ avatarUrl, size = 40, className }: UserAvatarProps) => {
  return (
    <Image
      src={avatarUrl || userPalceholder}
      alt="avatar"
      width={size}
      height={size}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
};

export default UserAvatar;

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverImegeProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({ imageProps, linkProps }: PostCoverImegeProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "h-full",
        "w-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "h-full",
          "w-full",
          "object-cover",
          "object-center",
          "transition",
          "group-hover:scale-105",
          imageProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}

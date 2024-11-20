import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { Avatar } from "./avatar";

interface AvatarUser_Props {
    alt: string;
    src: string | StaticImageData;
    className?: string;
}

export default function AvatarUser({ ...imageProps }: AvatarUser_Props) {
    return (
        <Avatar>
            <Image
                alt={imageProps.alt}
                src={imageProps.src}
                className={cn(
                    "aspect-square h-full w-full size-8 mr-1",
                    "max-sm:mr-2",
                    imageProps.className
                )}
            />
        </Avatar>
    )
}
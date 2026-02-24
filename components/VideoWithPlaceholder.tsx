// "use client";

// import {
//   useState,
//   useRef,
//   useEffect,
//   VideoHTMLAttributes,
// } from "react";
// import Image from "next/image";

// type Props = {
//   src: string;
//   placeholderSrc?: string;
//   alt?: string;
//   onLoad?: () => void;
// } & VideoHTMLAttributes<HTMLVideoElement>;

// export function VideoWithPlaceholder({
//   src,
//   placeholderSrc,
//   onLoad,
//   alt,
//   ...props
// }: Props) {
//   const [mediaSrc, setMediaSrc] = useState(placeholderSrc || src);
//   const [isVideoValid, setIsVideoValid] = useState(true);
//   const onLoadRef = useRef(onLoad);

//   useEffect(() => {
//     onLoadRef.current = onLoad;
//   }, [onLoad]);

//   useEffect(() => {
//     if (!src) return;

//     const videoExtensions = [".webm", ".mp4", ".ogg", ".avi", ".mov"];
//     const isVideo = videoExtensions.some((ext) =>
//       src.toLowerCase().endsWith(ext)
//     );

//     if (!isVideo) {
//       setIsVideoValid(false);
//       return;
//     }

//     const video = document.createElement("video");

//     video.onloadeddata = () => {
//       setMediaSrc(src);
//       setIsVideoValid(true);
//       onLoadRef.current?.();
//     };

//     video.onerror = () => {
//       setIsVideoValid(false);
//     };

//     video.src = src;
//   }, [src]);

//   if (!isVideoValid) {
//     return (
//       <Image
//         src={mediaSrc}
//         alt={alt || ""}
//         width={800}
//         height={500}
//         className="h-auto max-w-full rounded-lg"
//         unoptimized
//       />
//     );
//   }

//   return (
//     <video
//       src={mediaSrc}
//       autoPlay
//       loop
//       muted
//       playsInline
//       {...props}
//       className="h-auto max-w-full rounded-lg"
//     />
//   );
// }
"use client";

import Image from "next/image";

type Props = {
  src?: string;
  placeholderSrc?: string;
  alt?: string;
};

export function VideoWithPlaceholder({
  src,
  placeholderSrc,
  alt,
}: Props) {
  // If video exists → show video
  if (src && src.trim() !== "") {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-auto max-w-full rounded-lg"
      />
    );
  }

  // Otherwise show image
  return (
    <Image
      src={placeholderSrc || ""}
      alt={alt || ""}
      width={800}
      height={500}
      className="h-auto max-w-full rounded-lg"
      unoptimized
    />
  );
}
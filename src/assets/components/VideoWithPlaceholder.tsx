import {
  DetailedHTMLProps,
  VideoHTMLAttributes,
  ImgHTMLAttributes,
  useState,
  useRef,
  useEffect,
} from "react";

export function VideoWithPlaceholder({
  src,
  placeholderSrc,
  onLoad,
  alt,
  ...props
}: {
  onLoad?: () => void;
  placeholderSrc?: string;
  alt?: string;
} & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> &
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  const [mediaSrc, setMediaSrc] = useState(placeholderSrc || src);
  const [isVideoValid, setIsVideoValid] = useState(true);
  const onLoadRef = useRef(onLoad);

  useEffect(() => {
    onLoadRef.current = onLoad;
  }, [onLoad]);

  useEffect(() => {
    if (src && isValidVideo(src)) {
      const video = document.createElement("video");
      video.onloadeddata = () => {
        setMediaSrc(src);
        setIsVideoValid(true);
        if (onLoadRef.current) {
          onLoadRef.current();
        }
      };
      video.onerror = () => {
        setIsVideoValid(false);
      };
      video.src = src;
    } else {
      setIsVideoValid(false);
    }
  }, [src]);

  function isValidVideo(url: string) {
    const videoExtensions = [".webm", ".mp4", ".ogg", ".avi", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  }

  if (!isVideoValid) {
    return (
      <img
        src={mediaSrc}
        alt={alt}
        {...props}
        className="h-auto max-w-full rounded-lg"
      />
    );
  }

  return (
    <video
      src={mediaSrc}
      autoPlay
      loop
      muted
      {...props}
      className="h-auto max-w-full rounded-lg"
    />
  );
}

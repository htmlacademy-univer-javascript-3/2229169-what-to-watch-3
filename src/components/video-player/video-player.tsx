type VideoPlayerProps = {
  previewVideoLink: string;
  previewImage:string;
}

export default function VideoPlayer({previewVideoLink, previewImage}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={previewVideoLink}
      poster={previewImage}
      muted
      loop
      autoPlay
      width="100%"
      height="100%"
    >
    </video>
  );
}

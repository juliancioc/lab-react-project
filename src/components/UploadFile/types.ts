export type UploadFileProps = {
  title: string;
};

export type Event<T = EventTarget> = {
  target: T;
  preventDefault: () => void;
};

export type FileProps = {
  name: string;
  url: string;
};

/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}


declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}


declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.scss' ;

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}


declare module 'video-react' {
  type PreloadType = 'auto' | 'metadata' | 'none';

  interface PlayerPropsType {
    children?: any;

    width?: string | number;
    height?: string | number;
    fluid?: boolean; // = true;
    muted?: boolean; // = false;
    playsInline?: boolean; // = false;
    aspectRatio?: string; // = 'auto';
    className?: string;
    videoId?: string;

    startTime?: number;
    loop?: boolean;
    autoPlay?: boolean;
    src?: string;
    poster?: string;
    preload?: PreloadType; // = 'auto';

    onLoadStart?: ReactEventHandler;
    onWaiting?: ReactEventHandler;
    onCanPlay?: ReactEventHandler;
    onCanPlayThrough?: ReactEventHandler;
    onPlaying?: ReactEventHandler;
    onEnded?: ReactEventHandler;
    onSeeking?: ReactEventHandler;
    onSeeked?: ReactEventHandler;
    onPlay?: ReactEventHandler;
    onPause?: ReactEventHandler;
    onProgress?: ReactEventHandler;
    onDurationChange?: ReactEventHandler;
    onError?: ReactEventHandler;
    onSuspend?: ReactEventHandler;
    onAbort?: ReactEventHandler;
    onEmptied?: ReactEventHandler;
    onStalled?: ReactEventHandler;
    onLoadedMetadata?: ReactEventHandler;
    onLoadedData?: ReactEventHandler;
    onTimeUpdate?: ReactEventHandler;
    onRateChange?: ReactEventHandler;
    onVolumeChange?: ReactEventHandler;

    store?: object;
  }

  class Player extends React.Component<PlayerPropsType> {
    readonly video: Video;

    getDefaultChildren(originalChildren): Array<React.Component>;

    getChildren(props): Array<React.Component>;

    setWidthOrHeight(style: object, name: string, value: string | number);

    getStyle(): object;

    // get redux state
    // { player, operation }
    getState(): object;

    // get playback rate
    get playbackRate(): number;

    // set playback rate
    // speed of video
    set playbackRate(rate: number);

    get muted(): boolean;

    set muted(val: boolean);

    get volume(): number;

    set volume(val: number);

    // video width
    get videoWidth(): number;

    // video height
    get videoHeight(): number;

    // play the video
    play();

    // pause the video
    pause();

    // Change the video source and re-load the video:
    load();

    // Add a new text track to the video
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;

    // Check if your browser can play different types of video:
    canPlayType(type: string): CanPlayTypeResult;

    // seek video by time
    seek(time: number);

    // jump forward x seconds
    forward(seconds: number);

    // jump back x seconds
    replay(seconds: number);

    // enter or exist full screen
    toggleFullscreen();

    // subscribe to player state change
    subscribeToStateChange(listener: (state: any, prevState: any) => void);
  }

  interface VideoPropsType {
    actions?: object;
    player?: object;
    children?: any;
    startTime?: number;
    loop?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    playsInline?: boolean;
    src?: string;
    poster?: string;
    className?: string;
    preload?: PreloadType;
    crossOrigin?: string;

    onLoadStart?: ReactEventHandler;
    onWaiting?: ReactEventHandler;
    onCanPlay?: ReactEventHandler;
    onCanPlayThrough?: ReactEventHandler;
    onPlaying?: ReactEventHandler;
    onEnded?: ReactEventHandler;
    onSeeking?: ReactEventHandler;
    onSeeked?: ReactEventHandler;
    onPlay?: ReactEventHandler;
    onPause?: ReactEventHandler;
    onProgress?: ReactEventHandler;
    onDurationChange?: ReactEventHandler;
    onError?: ReactEventHandler;
    onSuspend?: ReactEventHandler;
    onAbort?: ReactEventHandler;
    onEmptied?: ReactEventHandler;
    onStalled?: ReactEventHandler;
    onLoadedMetadata?: ReactEventHandler;
    onLoadedData?: ReactEventHandler;
    onTimeUpdate?: ReactEventHandler;
    onRateChange?: ReactEventHandler;
    onVolumeChange?: ReactEventHandler;
    onResize?: ReactEventHandler;
  }

  class Video extends React.Component<VideoPropsType> {
    // get all video properties
    getProperties(): any;

    // get playback rate
    get playbackRate(): number;

    // set playback rate
    // speed of video
    set playbackRate(rate: number);

    get muted(): boolean;

    set muted(val: boolean);

    get volume(): number;

    set volume(val: number);

    // video width
    get videoWidth(): number;

    // video height
    get videoHeight(): number;

    // play the video
    play();

    // pause the video
    pause();

    // Change the video source and re-load the video:
    load();

    // Add a new text track to the video
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;

    // Check if your browser can play different types of video:
    canPlayType(type: string): CanPlayTypeResult;

    // toggle play
    togglePlay();

    // seek video by time
    seek(time: number);

    // jump forward x seconds
    forward(seconds: number);

    // jump back x seconds
    replay(seconds: number);

    // enter or exist full screen
    toggleFullscreen();
  }
}

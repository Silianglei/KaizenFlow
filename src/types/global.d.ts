interface Window {
  voiceflow?: {
    chat?: {
      load: (config: {
        verify: { projectID: string };
        url: string;
        versionID: string;
        persist?: boolean;
        endSession?: boolean;
        launch?: {
          autoOpen?: boolean;
          autoEnd?: boolean;
        };
        user?: {
          name?: string;
          id?: string;
        };
        session?: {
          persist?: boolean;
          resume?: boolean;
        };
      }) => void;
      open: () => void;
      close: () => void;
      proactive?: {
        push: (...messages: any[]) => void;
      };
    };
  };
}
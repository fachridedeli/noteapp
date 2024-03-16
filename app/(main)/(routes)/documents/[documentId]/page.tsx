"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const page = () => {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
    ],
  });
  console.log(editor);

  return <BlockNoteView editor={editor} />;
};

export default page;

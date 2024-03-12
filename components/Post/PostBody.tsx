"use client"

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import CopyToClipboard from "react-copy-to-clipboard";

import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Heading, Variant } from "../Heading";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

interface MarkdownRenderProps {
  content: string;
}

interface CustomAnchorProps {
  href: string;
  children: React.ReactNode;
}

interface CustomHeadingProps {
  level: number;
  children: React.ReactNode;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ level, children }) => {
  const variant = `h${String(level)}` as Variant;
  const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
  return (
    <Heading variant={variant} id={id} link>{children}</Heading>
  );
};

const CustomAnchor: React.FC<CustomAnchorProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="font-medium text-main underline">
      {children}
    </a>
  );
};

export const PostBody = ({ content }: MarkdownRenderProps) => {

  return (
    <ReactMarkdown
      className={"md-article"}
      remarkPlugins={[remarkGfm, remarkHtml]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      skipHtml={false}
      components={{
        code({ className, ...props }) {
          const hasLang = /language-(\w+)/.exec(className || "");
          return hasLang ? (
            <SyntaxHighlighter
              style={oneDark}
              showInlineLineNumbers
              language={hasLang[1]}
              PreTag="div"
              className="mockup-browsers scrollbar-thin scrollbar-track-grey scrollbar-thumb-base-content/55 scrollbar-track-rounded-md scrollbar-thumb-rounded"
              showLineNumbers={true}
              useInlineStyles={true}
            >
              {String(props.children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props} />
          );
        },
        pre: ({ className, ...pre }) => {
          const codeChunk = (pre as any).node.children[0].children[0].value as string;

          const [copyTip, setCopyTip] = useState("Copy code");

          const language =
            (pre as any).children.props.className.replace(
              /language-/g,
              ""
            ) as string;

          return (
            <div className="relative overflow-x-hidden">
              <button
                style={{
                  right: 0,
                }}
                className="tooltip tooltip-left absolute z-40 mr-2 mt-5 hover:bg-grey rounded-lg p-2"
                data-tip={copyTip}
              >
                <CopyToClipboard
                  text={codeChunk}
                  onCopy={async () => {
                    setCopyTip("Copied");
                    await new Promise((resolve) => setTimeout(resolve, 1500));
                    setCopyTip(`Copy code`);
                  }}
                >
                  <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer hover:text-blue-600" />
                </CopyToClipboard>
              </button>
              <span
                style={{
                  bottom: 1,
                  right: 0,
                }}
                className="absolute z-40 mb-5 mr-2 rounded-lg bg-grey px-1.5 py-0.5 text-xs font-sans uppercase text-base-300 backdrop-blur-sm"
              >
                {language}
              </span>
              <pre {...pre}></pre>
            </div>
          );
        },
        // @ts-ignore
        a: CustomAnchor,
        h1: ({ children }) => <CustomHeading level={1}>{children}</CustomHeading>,
        h2: ({ children }) => <CustomHeading level={2}>{children}</CustomHeading>,
        h3: ({ children }) => <CustomHeading level={3}>{children}</CustomHeading>,
        h4: ({ children }) => <CustomHeading level={4}>{children}</CustomHeading>,
        h5: ({ children }) => <CustomHeading level={5}>{children}</CustomHeading>,
        h6: ({ children }) => <CustomHeading level={6}>{children}</CustomHeading>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
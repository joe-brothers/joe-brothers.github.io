import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";

export const MarkdownRenderer = ({ children }: { children: string }) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown>{children}</ReactMarkdown>
    </MarkdownStyle>
  );
};

const MarkdownStyle = styled.div`
  font-size: 1rem;
  font-family: "Roboto";
  p > code {
    background: #d5d9ef;
  }
  pre {
    background-color: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;
  }
  blockquote {
    padding: 1rem;
    border: 1px dashed black;
  }
`;

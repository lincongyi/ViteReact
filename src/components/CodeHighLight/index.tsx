import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const CodeHighLight = ({
  language = 'typescript',
  codeString,
}: {
  codeString: string
  language?: string
}) => {
  return (
    <SyntaxHighlighter language={language} style={nord} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  )
}

export default CodeHighLight

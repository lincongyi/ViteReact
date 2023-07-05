import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const CodeHighLight = ({ codeString }: { codeString: string }) => {
  return (
    <SyntaxHighlighter language='jsx' style={nord} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  )
}

export default CodeHighLight

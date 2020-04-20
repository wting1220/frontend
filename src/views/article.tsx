import React, { memo } from 'react'
import '../scss/article.scss'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

export default memo(function Article() {

  const mdParser = new MarkdownIt()

  return (
    <div className="article">
      <header className="title">
        <h1>题目</h1>
      </header>
      <div className="content">
        <MdEditor renderHTML={(text) => mdParser.render(text)} />
      </div>
    </div>
  )
})
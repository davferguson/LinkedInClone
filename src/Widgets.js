import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("World is taking great initiative", "2hr ago • 2,420 readers")}
      {newsArticle("Tesla's latest woe: China price war","5h ago • 19,796 readers")}
      {newsArticle("Companies rethink dissent policies","4h ago • 35,486 readers")}
      {newsArticle("2.4B workers face climate risks","4h ago • 8,931 readers")}
      {newsArticle("Nike is laying off hundreds","5h ago • 32,192 readers")}
    </div>
  )
}

export default Widgets
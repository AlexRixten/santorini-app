import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="section_title">
        <h4 className="title-main">{title}</h4>
        <p className="subtitle-main">{subtitle}</p>
    </div>
  )
}

export default SectionTitle
import React from 'react';

export default function SocialMedia({ type }) {
  const classes = `social-media ${type}`;
  return (
    <div className={classes}>
      <a href="http://github.com/krsbx" className="fab fa-github">
        {''}
      </a>
      <a href="http://twitter.com/krsbx" className="fab fa-twitter">
        {''}
      </a>
      <a href="http://instagram.com/krs.bx" className="fab fa-instagram">
        {''}
      </a>
    </div>
  );
}

import React from 'react';
import style from './Footer.module.less';

export interface IFooterProps {
  name?: string;
  href?: string;
  github?: string;
  year?: number;
}

export default function Footer({ name, href, year, github }: IFooterProps) {
  return (
    <div className={[style.footer, 'wmde-markdown-var'].join(' ')}>
      <div>
        Licensed under MIT. (Yes it&acute;s free and <a href={github}>open-sourced</a>)
      </div>
      <div>
        ©{' '}
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {name}
        </a>{' '}
        {year}
      </div>
    </div>
  );
}

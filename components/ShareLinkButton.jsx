'use client';
import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';

const ShareLinkButton = () => {
  console.log('[ShareLinkButton] rendering');
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // console.log('clicked');
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };
  return (
    <button
      onClick={handleClick}
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700">
      <LinkIcon className="h-4 w-4" />
      {clicked ? 'Link copied' : 'Share Link'}
    </button>
  );
};

export default ShareLinkButton;

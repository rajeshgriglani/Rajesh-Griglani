import React, { useEffect, useMemo, useState } from 'react';
import { X, List, ChevronLeft, ChevronRight } from 'lucide-react';
import { BookLinksConfig } from '../data/config';
import { BOOK_OPENING_SAMPLE } from '../data/mock/bookOpeningSample';
import { BOOK_CONTENTS } from '../data/mock/bookContents';

interface BookSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBuyModal: () => void;
  bookLinks: BookLinksConfig;
}

export const BookSampleModal: React.FC<BookSampleModalProps> = ({
  isOpen,
  onClose,
  onOpenBuyModal,
}) => {
  const [page, setPage] = useState(0);
  const [isContentsOpen, setIsContentsOpen] = useState(false);

  const samplePages = useMemo(() => {
    const paragraphs = BOOK_OPENING_SAMPLE.content
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
    const pages: string[][] = [];
    const printedPageCount = BOOK_OPENING_SAMPLE.printedEndPage - BOOK_OPENING_SAMPLE.printedStartPage + 1;
    const paragraphsPerPage = Math.ceil(paragraphs.length / printedPageCount);
    for (let index = 0; index < paragraphs.length; index += paragraphsPerPage) {
      pages.push(paragraphs.slice(index, index + paragraphsPerPage));
    }
    return pages;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setPage(0);
    setIsContentsOpen(false);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') setPage((current) => Math.max(0, current - 1));
      if (event.key === 'ArrowRight') setPage((current) => Math.min(samplePages.length - 1, current + 1));
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, samplePages.length]);

  if (!isOpen) return null;

  const currentPage = samplePages[page] || [];
  const renderParagraph = (text: string, index: number) => {
    if (text === 'PART ONE' || text === 'ROOTS' || text === BOOK_OPENING_SAMPLE.chapter || text === BOOK_OPENING_SAMPLE.title || text === BOOK_OPENING_SAMPLE.subtitle) return null;
    if (text === '• • •') return <div key={index} className="my-8 text-center tracking-[0.5em] text-[#a97b3d]">• • •</div>;
    if (text.startsWith('“') && text.endsWith('”')) return <blockquote key={index} className="my-7 border-l-2 border-[#a97b3d] pl-5 italic text-[#4a3727]">{text}</blockquote>;
    if (text === 'Alfred Lord Tennyson, Charge of the Light Brigade') return <p key={index} className="mb-7 text-center text-sm italic text-[#79634d]">{text}</p>;
    if (text.startsWith('Come, come today to the marketplace in chains,')) return <p key={index} className="my-7 whitespace-pre-line border-y border-[#d9c8ad] py-5 italic text-[#4a3727]">{text}</p>;
    return <p key={index} className="mb-6 indent-8">{text}</p>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#16120e]/95 p-2 sm:p-5" role="dialog" aria-modal="true" aria-labelledby="book-reader-title">
      <div className="relative flex h-[96vh] w-full max-w-6xl flex-col overflow-hidden border border-[#6f593e] bg-[#211b14] text-[#ece8e0] shadow-[0_30px_100px_rgba(0,0,0,0.8)] sm:rounded-xl">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#4c3b29] bg-[#18130f] px-4 py-3 sm:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c8a96e]">Opening Sample Excerpt</p>
            <h2 id="book-reader-title" className="font-serif text-lg font-bold text-[#f7eddd] sm:text-2xl">Roots of Resistance</h2>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setIsContentsOpen((open) => !open)} className="inline-flex min-h-[44px] items-center gap-2 rounded border border-[#5b4934] px-3 text-xs font-semibold uppercase tracking-wider text-[#e4c894] hover:bg-[#302316]" aria-expanded={isContentsOpen}>
              <List className="h-4 w-4" /> <span className="hidden sm:inline">Contents</span>
            </button>
            <button type="button" onClick={onClose} className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-[#5b4934] text-[#d5c4aa] hover:bg-[#302316]" aria-label="Close book reader"><X className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1">
          {isContentsOpen && <aside className="absolute inset-y-0 left-0 z-20 w-full overflow-y-auto border-r border-[#cbb894] bg-[#eee2cd] p-5 text-[#3e2e20] shadow-2xl sm:w-[370px] sm:p-7">
            <div className="mb-5 flex items-center justify-between"><h3 className="font-serif text-2xl font-bold">Contents</h3><button type="button" onClick={() => setIsContentsOpen(false)} aria-label="Close contents"><X className="h-5 w-5" /></button></div>
            <p className="mb-5 border-b border-[#cbb894] pb-4 text-xs italic text-[#745c42]">Complete book contents. Only the opening sample is available to read here.</p>
            <div className="space-y-4">{BOOK_CONTENTS.map((section) => <div key={section.part}><h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#815c2d]">{section.part}</h4><div className="mt-1 space-y-1">{section.entries.map((entry) => <button key={entry.title} type="button" onClick={() => { if (entry.available) { setPage(0); setIsContentsOpen(false); } }} disabled={!entry.available} className={`flex w-full items-start justify-between gap-3 py-1.5 text-left text-sm ${entry.available ? 'text-[#3e2e20] hover:text-[#9a6c2d]' : 'cursor-default text-[#9c8b77]'}`}><span>{entry.title}{!entry.available && <span className="ml-2 text-[10px] uppercase tracking-wider">Complete book</span>}</span><span className="shrink-0 font-mono text-xs">{entry.page}</span></button>)}</div></div>)}</div>
          </aside>}

          <main className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-[#eadcc5] bg-[radial-gradient(rgba(122,87,44,0.08)_0.7px,transparent_0.7px)] bg-[size:7px_7px]">
            <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-9 font-serif text-[17px] leading-[1.85] text-[#4a3727] sm:px-14 sm:py-12 sm:text-[18px] lg:px-20">
              {page === 0 && <header className="mb-9 border-b border-[#cbb894] pb-8 text-center"><p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9a6c2d]">Part One · Roots</p><p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#9a6c2d]">Chapter 1</p><h3 className="text-3xl font-bold uppercase tracking-tight text-[#302217] sm:text-5xl">The Inheritance of Fire</h3><p className="mt-3 text-lg italic text-[#815c2d]">What It Means to Be a Congress Worker</p></header>}
              {currentPage.map(renderParagraph)}
              {page === samplePages.length - 1 && <div className="mt-10 border-t border-[#cbb894] pt-8 text-center"><p className="font-serif text-lg italic text-[#815c2d]">Enjoyed reading this sample?</p><button type="button" onClick={() => { onClose(); onOpenBuyModal(); }} className="mt-4 rounded bg-[#9a6c2d] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#fff8eb] hover:bg-[#7f5623]">Purchase the Complete Book</button></div>}
            </article>
            <footer className="sticky bottom-0 flex shrink-0 items-center justify-between border-t border-[#cbb894] bg-[#e3d2b5]/95 px-4 py-3 text-xs text-[#6f5437] backdrop-blur sm:px-8"><button type="button" onClick={() => setPage((current) => Math.max(0, current - 1))} disabled={page === 0} className="inline-flex min-h-[44px] items-center gap-1 rounded px-2 font-semibold uppercase tracking-wider enabled:hover:bg-[#d2bd9c] disabled:opacity-35"><ChevronLeft className="h-4 w-4" /> Previous</button><span className="text-center font-mono">Sample Page {page + 1} of {samplePages.length}<span className="mx-2 text-[#aa8b64]">·</span>Printed Page {BOOK_OPENING_SAMPLE.printedStartPage + page}</span><button type="button" onClick={() => setPage((current) => Math.min(samplePages.length - 1, current + 1))} disabled={page === samplePages.length - 1} className="inline-flex min-h-[44px] items-center gap-1 rounded px-2 font-semibold uppercase tracking-wider enabled:hover:bg-[#d2bd9c] disabled:opacity-35">Next <ChevronRight className="h-4 w-4" /></button></footer>
          </main>
        </div>
      </div>
    </div>
  );
};

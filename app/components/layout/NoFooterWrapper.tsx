'use client';

export default function NoFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style jsx global>{`
        .footer-wrapper {
          display: none !important;
        }
      `}</style>
      <div className="no-footer">
        {children}
      </div>
    </>
  );
} 
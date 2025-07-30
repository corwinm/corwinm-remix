interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="min-h-screen bg-white print:min-h-0">
      <section className="max-w-4xl mx-auto px-8 py-8 print:max-w-none print:mx-0 print:px-0 print:py-0">
        {children}
      </section>
    </div>
  );
}

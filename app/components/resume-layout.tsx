interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="min-h-[1082px] bg-white text-black print:min-h-full">
      <section className="max-w-4xl mx-auto max-h-[1082px] px-[40px] py-[40px] print:max-w-none print:mx-0 print:px-0 print:py-0">
        {children}
      </section>
    </div>
  );
}

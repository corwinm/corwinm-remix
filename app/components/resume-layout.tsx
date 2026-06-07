interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="hidden min-h-[1082px] bg-white text-black md:block print:block print:min-h-0">
      <section className="max-w-4xl mx-auto min-h-[1082px] px-[40px] py-[40px] print:max-w-none print:min-h-0 print:mx-0 print:px-0 print:py-0">
        {children}
      </section>
    </div>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Ebba Birhanu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

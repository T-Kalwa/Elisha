import { useNavigate, useLocation } from 'react-router-dom';

interface GlossaryLinkProps {
  termId: string;
  label: string;
  className?: string;
  // Optional: if we are already in the Study page, we might want to just set the state
  // directly, but standardizing on navigation with state/query is cleaner for global use.
  onSelect?: (chapter: string) => void;
}

const GlossaryLink = ({ termId, label, className = "", onSelect }: GlossaryLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // If we are already on the /etude page and have the setter, use it
    if (location.pathname === '/etude' && onSelect) {
      onSelect('glossaire');
      // Scroll to the element after a short delay to allow state update
      setTimeout(() => {
        const el = document.getElementById(`gloss-${termId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight effect
          el.classList.add('bg-red-600/20');
          setTimeout(() => el.classList.remove('bg-red-600/20'), 2000);
        }
      }, 100);
    } else {
      // Navigate to the etude page with state
      navigate('/etude', { state: { chapter: 'glossaire', termId } });
    }
  };

  return (
    <span
      onClick={handleClick}
      title={`Voir la définition de « ${label} »`}
      className={`text-red-400 border-b border-red-600/50 border-dashed cursor-pointer hover:text-red-300 hover:border-red-400 transition-all duration-200 font-medium ${className}`}
    >
      {label}
    </span>
  );
};

export default GlossaryLink;

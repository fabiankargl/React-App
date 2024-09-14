export const Label = ({ children, forHtml, className }) => {
    return (
      <label
        htmlFor={forHtml}
        className={`text-lg p-2 ${className}`}
      >
        {children}
      </label>
    );
  };
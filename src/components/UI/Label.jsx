export const Label = ({ children, forHtml, className, testId }) => {
    return (
      <label
        htmlFor={forHtml}
        className={`text-lg p-2 ${className}`}
        testId={testId}
      >
        {children}
      </label>
    );
  };
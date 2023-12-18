import React from "react";

function ButtonMain({
  title,
  onClick,
  isLoading,
}: {
  title: string;
  onClick: any;
  isLoading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="text-sm bg-th-button-primary px-6 py-2 rounded-full hover:bg-th-button-primary-hover transition-all"
    >
      <p className={` text-white`}> {title}</p>
    </button>
  );
}

export default ButtonMain;

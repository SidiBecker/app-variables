import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import './PageSelect.scss';
import { AllPages } from '../../Utils/PagesEnum';

const Page = ({ page, selectedPage, onClick }: any) => {
  return (
    <button
      className={selectedPage === page ? 'selected' : ''}
      onClick={() => onClick(page)}
    >
      {page.label}
    </button>
  );
};

export function PageSelect({
  page,
  onChange,
}: InferProps<typeof PageSelect.propTypes>) {
  return (
    <div className="pages-select">
      {AllPages.map((pageObj, index) => (
        <Page
          page={pageObj}
          selectedPage={page}
          key={`page_${index}`}
          onClick={(value: number) => onChange(value)}
        />
      ))}
    </div>
  );
}

PageSelect.propTypes = {
  page: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

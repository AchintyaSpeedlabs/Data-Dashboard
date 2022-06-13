//Packages
import React from 'react';

//Pagination logic
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
 
  return (
      <nav>
        <ul className='justify-content-center pagination'>
            {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <a style={{color:"white",backgroundColor:"#6d3088"}} onClick={() => paginate(number)} href='#!' className='page-link'>
                {number}
                </a>
            </li>
            ))}
        </ul>
      </nav>
  );
};

export default Pagination;
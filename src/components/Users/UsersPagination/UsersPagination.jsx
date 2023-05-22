import styles from './UsersPagination.module.css';

const UsersPagination = (props) => {
  const pagesCount = Math.ceil(props.totalPages / 10);
  const allPages = [];
  for (let i = 1; i < pagesCount; i++) {
    allPages.push(i);
  }
  const minPageNo = props.currentPage <= 10 ? 0 : (props.currentPage - 5);
  const maxPageNo = props.currentPage < props.totalPages ? (props.currentPage + 5) : props.totalPages;
  const pages = allPages.slice(minPageNo, maxPageNo);
  const pagesElements = pages.map((page) => {
    return (
      <span className={`${styles.item} ${page === props.currentPage ? styles.current : ''}`} onClick={() => props.setCurrentPage(page)} key={page}>{page}</span>
    );
  })
  return (
    <div className={styles.pagination} >
      {pagesElements}
    </div>
  );
};

export default UsersPagination;
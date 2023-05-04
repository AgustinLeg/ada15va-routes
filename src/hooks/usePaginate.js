import { useState } from "react"


export const usePaginate = (initialPage = 0) => {
  const [page, setPage]  = useState(initialPage)
  const [perPage, setPerPage] = useState(20)
  
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => {
    if(page > initialPage){
      setPage((prev) => prev - 1)
    }
  };
  const resetPage = () => setPage(0)


  const handlePerPage = (number) => setPerPage(number)
  
  
  return {
    page,
    nextPage,
    prevPage,
    resetPage,
    perPage,
    handlePerPage,
  }

}
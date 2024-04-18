import React, { useState } from "react";
import { Card, Pagination, PopularPost, PopularWriter } from "../components";
import { popular, posts } from "../utils/dummyData";

const CategoriesPage = () => {
  const query = new URLSearchParams(window.location.search).get("cat")
  
  const numOfPages = 4
  const [ page, setPage] = useState(0)

  const handlePageChange = (val) => {
    setPage(val)
  }

  return (
  <div className="px-0 2xl:px20">
    <div className="py-5">
      <h2 className="text-4xl 2xl:text-5xl font-semibold text-slate-800 dark:text-white">
        {query}
      </h2>
    </div>
    <div className="w-full flex flex-col md:flex-row gap-10 2xl:gap-20">
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-10">
        {posts?.length ===0 ? (
          <div className="w-full h-full py-8 flex justify-center">
            <span className="text-lg text-slate-500">
              Não um post encontrado para essa categoria
            </span>
          </div>
        ) : (
          <>
          {posts?.map((post) => (
            <Card key={post?._id} post={post}/>
          ))}
          <div className="w-full flex items-center justify-center">
            <Pagination totalPages={numOfPages} onPageChange={handlePageChange}/>
          </div>
          </>
        )}
      </div>
      {/* Right */}
      <div className="w-full md:-1/4 flex flex-col gap-y-12">
        {/* Posts populares */}
        <PopularPost posts={popular?.posts}/>
        {/* Popular writers */}
        <PopularWriter data={popular?.writers}/>
      </div>
    </div>
  </div>
  )
};

export default CategoriesPage;
